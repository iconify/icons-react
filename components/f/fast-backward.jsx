import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqlg3vbfp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqlg3vbfp"/>`,
		"fallback": "vaadin:fast-backward",
	});
}

export default Component;
