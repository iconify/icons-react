import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdbcpwbxd.css';
import '../../css/z/zso3njb9g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdbcpwbxd"/><path class="zso3njb9g"/>`,
		"fallback": "energy-icons:battery-bolt-20",
	});
}

export default Component;
