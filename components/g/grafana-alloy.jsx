import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srcnhcb3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srcnhcb3h"/>`,
		"fallback": "selfhst:grafana-alloy",
	});
}

export default Component;
