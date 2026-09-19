import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mmj0dutfl.css';
import '../../css/c/c_cjlv91j.css';
import '../../css/a/aedg6zbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mmj0dutfl"/><path class="c_cjlv91j"/><path class="aedg6zbbn"/></g>`,
		"fallback": "hugeicons:image-composition",
	});
}

export default Component;
