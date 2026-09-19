import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnut4_biv.css';
import '../../css/i/itv7kab7h.css';
import '../../css/r/rxl616bbn.css';
import '../../css/t/tx4bxklty.css';
import '../../css/d/d27ljhbfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="hnut4_biv"/><path class="itv7kab7h"/><path class="rxl616bbn"/><circle class="tx4bxklty"/><circle class="d27ljhbfy"/></g>`,
		"fallback": "icon-park-solid:game-console",
	});
}

export default Component;
