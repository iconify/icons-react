import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psiglkazx.css';
import '../../css/n/ntlr19bwp.css';
import '../../css/c/c6n323zgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="psiglkazx"><path class="ntlr19bwp"/><path class="c6n323zgn"/></g>`,
		"fallback": "gcp:cloud-gpu",
	});
}

export default Component;
