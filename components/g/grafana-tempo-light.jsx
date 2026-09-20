import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlv1xyrrq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlv1xyrrq"/>`,
		"fallback": "selfhst:grafana-tempo-light",
	});
}

export default Component;
