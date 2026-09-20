import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbzq34z6d.css';
import '../../css/f/fwm_o_cit.css';
import '../../css/t/ta34zub4x.css';
import '../../css/b/bzm0vxl8k.css';
import '../../css/h/h0oqh_bpy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bbzq34z6d"/><path class="fwm_o_cit"/><path class="ta34zub4x"/><path class="bzm0vxl8k"/><path class="h0oqh_bpy"/></g>`,
		"fallback": "streamline-color:bacteria-virus-cells-biology",
	});
}

export default Component;
