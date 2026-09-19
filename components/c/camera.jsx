import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev2uwsbpk.css';
import '../../css/h/h-oq0kbcn.css';
import '../../css/i/i6xjdtbiq.css';
import '../../css/s/s_jf28v_p.css';
import '../../css/s/sg1u4oh-u.css';
import '../../css/r/r5h4hkbcu.css';
import '../../css/k/kxlo67bdf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ev2uwsbpk"/><path class="h-oq0kbcn"/><path class="i6xjdtbiq"/><path class="s_jf28v_p"/><path class="sg1u4oh-u"/><path class="r5h4hkbcu"/><path class="kxlo67bdf"/></g>`,
		"fallback": "fluent-emoji-flat:camera",
	});
}

export default Component;
