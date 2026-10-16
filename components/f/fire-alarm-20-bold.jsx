import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpfh3ybpx.css';
import '../../css/m/mc7p0pbek.css';
import '../../css/r/rsgdkwbmp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpfh3ybpx"/><path class="mc7p0pbek"/><path class="rsgdkwbmp"/>`,
		"fallback": "energy-icons:fire-alarm-20-bold",
	});
}

export default Component;
