import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwawrhueb.css';
import '../../css/d/dq6d_3byk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwawrhueb"/><path class="dq6d_3byk"/>`,
		"fallback": "carbon:ibm-cloud-kubernetes-service",
	});
}

export default Component;
