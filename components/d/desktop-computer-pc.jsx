import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ninwsxb1h.css';
import '../../css/k/kgw252bip.css';
import '../../css/m/mfuvyvbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ninwsxb1h"/><path class="kgw252bip"/><path class="mfuvyvbxo"/></g>`,
		"fallback": "streamline-freehand-color:desktop-computer-pc",
	});
}

export default Component;
