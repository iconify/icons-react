import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2hl1gbca.css';
import '../../css/o/opzqht43q.css';
import '../../css/m/mw2-7wb7w.css';
import '../../css/e/emoy9fbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2hl1gbca"/><path class="opzqht43q"/><path class="mw2-7wb7w"/><path class="emoy9fbht"/></g>`,
		"fallback": "lucide-extended:clipboard-clock-duotone",
	});
}

export default Component;
