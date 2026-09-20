import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n2dz4-9sb.css';
import '../../css/p/pyjbxobzr.css';
import '../../css/o/o26jfqrru.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n2dz4-9sb"/><path class="pyjbxobzr"/><path class="o26jfqrru"/></g>`,
		"fallback": "streamline-flex:binoculars",
	});
}

export default Component;
