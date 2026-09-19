import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbhtpfbxo.css';
import '../../css/d/dv2xvhb0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbhtpfbxo"/><path class="dv2xvhb0f"/>`,
		"fallback": "cil:https",
	});
}

export default Component;
