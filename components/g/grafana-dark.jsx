import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpa441bvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpa441bvf"/>`,
		"fallback": "selfhst:grafana-dark",
	});
}

export default Component;
