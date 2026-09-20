import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1aks1oms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q1aks1oms"/>`,
		"fallback": "streamline-ultimate:division-math-symbol-circle-bold",
	});
}

export default Component;
