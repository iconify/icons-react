import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_c67094d.css';
import '../../css/j/jpl6uh7_x.css';
import '../../css/d/dtfn2kbod.css';
import '../../css/a/afxb8ccpm.css';
import '../../css/p/pw4ju4b7d.css';
import '../../css/s/se6g41bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z_c67094d"/><path clip-rule="evenodd" class="jpl6uh7_x"/><path class="dtfn2kbod"/><path class="afxb8ccpm"/><path class="pw4ju4b7d"/><path class="se6g41bel"/>`,
		"fallback": "token:1inch",
	});
}

export default Component;
