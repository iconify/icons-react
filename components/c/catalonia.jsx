import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjp3yo8sn.css';
import '../../css/u/ux9cdwbcv.css';
import '../../css/b/bt0mqnb_p.css';
import '../../css/t/t41k8723w.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjp3yo8sn"/><path class="ux9cdwbcv"/><path class="bt0mqnb_p"/><path class="t41k8723w"/>`,
		"fallback": "tabler-flags:catalonia",
	});
}

export default Component;
