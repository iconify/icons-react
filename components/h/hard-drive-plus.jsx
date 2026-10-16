import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igmlgzbtz.css';
import '../../css/k/kyvk03wip.css';
import '../../css/t/tjdz9r0ba.css';
import '../../css/j/juoltibia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="igmlgzbtz"/><path class="kyvk03wip"/><path class="tjdz9r0ba"/><path class="juoltibia"/></g>`,
		"fallback": "andrsrxn:hard-drive-plus",
	});
}

export default Component;
