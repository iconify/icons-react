import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr0chacef.css';
import '../../css/s/s_5rrdb7b.css';
import '../../css/i/iq7w8h2jf.css';
import '../../css/k/kuar6yfma.css';
import '../../css/f/fk592nv7k.css';
import '../../css/a/a1tx6bc4w.css';
import '../../css/r/rfdp__b7m.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="pr0chacef"><path class="s_5rrdb7b"/><path class="iq7w8h2jf"/><path class="kuar6yfma"/></g><path clip-rule="evenodd" class="fk592nv7k"/><path clip-rule="evenodd" class="a1tx6bc4w"/><path clip-rule="evenodd" class="rfdp__b7m"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:checkmark-outlined-off",
	});
}

export default Component;
