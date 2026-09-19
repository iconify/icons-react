import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/cnkqfptnp.css';
import '../../css/d/dcnuadlyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="cnkqfptnp"/><path class="dcnuadlyf"/></g>`,
		"fallback": "iconamoon:file-add-light",
	});
}

export default Component;
