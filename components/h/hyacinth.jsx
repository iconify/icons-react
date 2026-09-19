import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ijc54absg.css';
import '../../css/h/hwda9dbfv.css';
import '../../css/s/stdhzgj1z.css';
import '../../css/d/dw-dkqb5t.css';
import '../../css/a/aa1jcub1d.css';
import '../../css/z/zckpt7bfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ijc54absg"/><path class="hwda9dbfv"/><path class="stdhzgj1z"/><path class="dw-dkqb5t"/><path class="aa1jcub1d"/><path class="zckpt7bfn"/></g>`,
		"fallback": "fluent-emoji-flat:hyacinth",
	});
}

export default Component;
