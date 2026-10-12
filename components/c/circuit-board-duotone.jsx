import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmhne9bsb.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/t/tkv75thxj.css';
import '../../css/b/betxepw8e.css';
import '../../css/d/ducs5rbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vmhne9bsb"/><path class="s1a2eew1e"/><path class="tkv75thxj"/><path class="betxepw8e"/><path class="ducs5rbxo"/></g>`,
		"fallback": "lucide-extended:circuit-board-duotone",
	});
}

export default Component;
