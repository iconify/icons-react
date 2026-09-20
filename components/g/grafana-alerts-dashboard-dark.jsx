import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j89cktuio.css';
import '../../css/t/tx20ehscf.css';
import '../../css/h/h4zt9xb_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j89cktuio"/><path class="tx20ehscf"/><path class="h4zt9xb_v"/>`,
		"fallback": "selfhst:grafana-alerts-dashboard-dark",
	});
}

export default Component;
