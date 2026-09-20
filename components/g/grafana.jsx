import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1umu_e9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1umu_e9u"/>`,
		"fallback": "simple-icons:grafana",
	});
}

export default Component;
