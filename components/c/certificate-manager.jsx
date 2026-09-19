import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psiglkazx.css';
import '../../css/u/ua7vtoaqg.css';
import '../../css/b/baclkzhxm.css';
import '../../css/b/b3ay_7b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="psiglkazx"><path clip-rule="evenodd" class="ua7vtoaqg"/><path clip-rule="evenodd" class="baclkzhxm"/><path class="b3ay_7b1k"/></g>`,
		"fallback": "gcp:certificate-manager",
	});
}

export default Component;
