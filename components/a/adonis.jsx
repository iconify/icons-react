import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5s0_hb8t.css';

const viewBox = {"width":180,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path paint-order="fill markers stroke" class="l5s0_hb8t"/>`,
		"fallback": "material-icon-theme:adonis",
	});
}

export default Component;
