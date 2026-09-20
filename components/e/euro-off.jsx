import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/f/f45he6j8z.css';
import '../../css/y/yew2subez.css';
import '../../css/v/v_32bvaot.css';
import '../../css/p/pk0xzxb8w.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="f45he6j8z"/><path class="yew2subez"/></g><path clip-rule="evenodd" class="v_32bvaot"/><path clip-rule="evenodd" class="pk0xzxb8w"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:euro-off",
	});
}

export default Component;
