import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiod-8bbi.css';
import '../../css/k/kq1tsebcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiod-8bbi"/><path class="kq1tsebcp"/>`,
		"fallback": "energy-icons:connector-mcs-48-bold",
	});
}

export default Component;
