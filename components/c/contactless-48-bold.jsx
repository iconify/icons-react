import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eptwc2k3p.css';
import '../../css/s/sadekmbkj.css';
import '../../css/n/nfgmrlbfj.css';
import '../../css/m/m7-zbrb8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eptwc2k3p"/><path class="sadekmbkj"/><path class="nfgmrlbfj"/><path class="m7-zbrb8b"/>`,
		"fallback": "energy-icons:contactless-48-bold",
	});
}

export default Component;
