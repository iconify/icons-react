import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnizhvbij.css';
import '../../css/c/cbbk25b7d.css';
import '../../css/k/kwxtwsb-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnizhvbij"/><path class="cbbk25b7d"/><path class="kwxtwsb-m"/>`,
		"fallback": "energy-icons:blade-transport-48",
	});
}

export default Component;
