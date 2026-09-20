import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnxvotb9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnxvotb9i"/>`,
		"fallback": "selfhst:grafana-alloy-dark",
	});
}

export default Component;
