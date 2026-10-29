import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/exb76317f.css';
import '../../css/f/fjrp7734d.css';
import '../../css/s/sn07vob-o.css';
import '../../css/k/kxglrppal.css';
import '../../css/h/hcxrx_4kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="exb76317f"/><path class="fjrp7734d"/><path class="sn07vob-o"/><path class="kxglrppal"/><path class="hcxrx_4kl"/></g>`,
		"fallback": "withicons-bauhaus:avatar-man",
	});
}

export default Component;
