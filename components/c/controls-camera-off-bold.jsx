import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn_ovn4eq.css';
import '../../css/j/jm-sdob1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn_ovn4eq"/><path class="jm-sdob1r"/>`,
		"fallback": "streamline-ultimate:controls-camera-off-bold",
	});
}

export default Component;
