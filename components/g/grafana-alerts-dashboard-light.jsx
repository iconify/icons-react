import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzg19p0qh.css';
import '../../css/f/f2eh-dbua.css';
import '../../css/a/aca60mb-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzg19p0qh"/><path class="f2eh-dbua"/><path class="aca60mb-f"/>`,
		"fallback": "selfhst:grafana-alerts-dashboard-light",
	});
}

export default Component;
