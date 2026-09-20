import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk5v1ugen.css';
import '../../css/v/v0terl0zp.css';
import '../../css/k/krqyf7jcs.css';
import '../../css/v/vr_wmi0nv.css';
import '../../css/p/pu63pwb2t.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk5v1ugen"/><path class="v0terl0zp"/><path class="krqyf7jcs"/><path class="vr_wmi0nv"/><path class="pu63pwb2t"/>`,
		"fallback": "medical-icon:i-elevators",
	});
}

export default Component;
