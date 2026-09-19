import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lv_u3fbwv.css';
import '../../css/b/bej_0fbfn.css';
import '../../css/x/xlot_0bem.css';
import '../../css/m/mvtnklbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lv_u3fbwv"/><path class="bej_0fbfn"/><circle class="xlot_0bem"/><path class="mvtnklbfw"/></g>`,
		"fallback": "iconamoon:camera-image-duotone",
	});
}

export default Component;
