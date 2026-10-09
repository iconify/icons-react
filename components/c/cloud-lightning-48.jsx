import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlah_2byn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlah_2byn"/>`,
		"fallback": "energy-icons:cloud-lightning-48",
	});
}

export default Component;
