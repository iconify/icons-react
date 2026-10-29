import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ovlb7dubv.css';
import '../../css/v/vl89ophho.css';
import '../../css/i/ides4ac0q.css';
import '../../css/x/xuaual9ot.css';
import '../../css/e/eyejxqbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ovlb7dubv wm-deco"/><path class="vl89ophho wm-deco"/><path class="ides4ac0q wm-k"/><path class="wm-a xuaual9ot"/><path class="eyejxqbhe wm-a"/></g>`,
		"fallback": "withicons:eraser-blueprint",
	});
}

export default Component;
