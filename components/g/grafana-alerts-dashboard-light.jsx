import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzg19p0qh.css';
import '../../css/q/q8n-7fbhw.css';
import '../../css/g/gy63hpboi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzg19p0qh"/><path class="q8n-7fbhw"/><path class="gy63hpboi"/>`,
		"fallback": "selfhst:grafana-alerts-dashboard-light",
	});
}

export default Component;
