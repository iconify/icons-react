import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lgmhfxbmw.css';
import '../../css/y/yudrnbc3k.css';
import '../../css/f/f93lxhbsl.css';
import '../../css/b/bab1vds8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lgmhfxbmw"/><path class="yudrnbc3k"/><path class="f93lxhbsl"/><path class="bab1vds8v"/></g>`,
		"fallback": "andrsrxn:articles",
	});
}

export default Component;
