import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o3x7n9lzn.css';
import '../../css/a/akqn6ybtj.css';
import '../../css/l/l8hdyejxo.css';
import '../../css/t/tgs0vfz_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o3x7n9lzn"/><path class="akqn6ybtj"/><path class="l8hdyejxo"/><path class="tgs0vfz_k"/></g>`,
		"fallback": "hugeicons:hologram",
	});
}

export default Component;
