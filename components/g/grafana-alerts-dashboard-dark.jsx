import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j89cktuio.css';
import '../../css/r/rgvx_5b3k.css';
import '../../css/i/io-5labnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j89cktuio"/><path class="rgvx_5b3k"/><path class="io-5labnh"/>`,
		"fallback": "selfhst:grafana-alerts-dashboard-dark",
	});
}

export default Component;
