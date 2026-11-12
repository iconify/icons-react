import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4wzr7bqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4wzr7bqz"/>`,
		"fallback": "selfhst:grafana-tempo-light",
	});
}

export default Component;
