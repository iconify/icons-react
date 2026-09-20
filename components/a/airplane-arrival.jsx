import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2fqmcakj.css';
import '../../css/w/wif-y3bli.css';
import '../../css/e/eiqm-gbjn.css';
import '../../css/c/csiadobsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c2fqmcakj"/><path class="wif-y3bli"/><path class="eiqm-gbjn"/><path class="csiadobsa"/></g>`,
		"fallback": "streamline-cyber-color:airplane-arrival",
	});
}

export default Component;
