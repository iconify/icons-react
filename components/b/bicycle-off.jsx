import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-t72bpzp.css';
import '../../css/i/igz61olkm.css';
import '../../css/p/p749f_u1o.css';
import '../../css/z/z6hf0nvwr.css';
import '../../css/f/fmg8n-8ff.css';
import '../../css/i/i9fjefbqx.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v-t72bpzp"/><path clip-rule="evenodd" class="igz61olkm"/><path class="p749f_u1o"/><path clip-rule="evenodd" class="z6hf0nvwr"/><path class="fmg8n-8ff"/><path class="i9fjefbqx"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:bicycle-off",
	});
}

export default Component;
