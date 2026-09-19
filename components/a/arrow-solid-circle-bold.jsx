import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw_jc_5dy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iw_jc_5dy"/>`,
		"fallback": "glyphs:arrow-solid-circle-bold",
	});
}

export default Component;
