import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euz4yigix.css';
import '../../css/x/xrxfll02s.css';
import '../../css/p/p5so3dbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euz4yigix"/><path class="xrxfll02s"/><path class="p5so3dbgl"/>`,
		"fallback": "token:chr",
	});
}

export default Component;
