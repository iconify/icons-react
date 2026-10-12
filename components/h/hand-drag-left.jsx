import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv3ov9ble.css';
import '../../css/k/klbazzbca.css';
import '../../css/a/al-0xqbnt.css';
import '../../css/a/a-0zs9b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hv3ov9ble"/><path class="klbazzbca"/><path class="al-0xqbnt"/><path class="a-0zs9b1g"/></g>`,
		"fallback": "andrsrxn:hand-drag-left",
	});
}

export default Component;
