import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i47nbgbrf.css';
import '../../css/o/o5p2w8b9h.css';
import '../../css/c/cbgd6lblv.css';
import '../../css/e/e3rm47bbh.css';
import '../../css/c/c838azbgm.css';
import '../../css/o/oe5tcabos.css';
import '../../css/h/h1pqy7but.css';
import '../../css/n/n5-hcgitu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i47nbgbrf"/><path class="o5p2w8b9h"/><path class="cbgd6lblv"/><path class="e3rm47bbh"/><path class="c838azbgm"/><path class="oe5tcabos"/><path class="h1pqy7but"/><path class="n5-hcgitu"/></g>`,
		"fallback": "fluent-emoji-flat:department-store",
	});
}

export default Component;
