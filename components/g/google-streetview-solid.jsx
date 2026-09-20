import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxrry-bew.css';
import '../../css/q/q_k3wsbkz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxrry-bew"/><path class="q_k3wsbkz"/>`,
		"fallback": "teenyicons:google-streetview-solid",
	});
}

export default Component;
