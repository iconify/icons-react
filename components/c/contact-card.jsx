import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osu7_ob_f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osu7_ob_f"/>`,
		"fallback": "fa7-solid:contact-card",
	});
}

export default Component;
