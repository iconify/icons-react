import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiv9skboe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiv9skboe"/>`,
		"fallback": "selfhst:grafana-alloy-light",
	});
}

export default Component;
