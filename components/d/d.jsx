import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-snw_bnw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-snw_bnw"/>`,
		"fallback": "glyphs:d",
	});
}

export default Component;
