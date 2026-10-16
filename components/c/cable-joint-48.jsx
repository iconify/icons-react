import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbc6c5bqk.css';
import '../../css/x/xy_8owk3p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbc6c5bqk"/><path class="xy_8owk3p"/>`,
		"fallback": "energy-icons:cable-joint-48",
	});
}

export default Component;
