import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl_f9mdkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl_f9mdkg"/>`,
		"fallback": "fa-solid:arrow-alt-circle-right",
	});
}

export default Component;
