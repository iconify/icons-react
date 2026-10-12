import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfgpgo98v.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/d/dztgjdbnh.css';
import '../../css/v/vp15k3-sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfgpgo98v"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="dztgjdbnh"/><path class="vp15k3-sw"/></g>`,
		"fallback": "lucide-extended:file-video-camera-duotone",
	});
}

export default Component;
