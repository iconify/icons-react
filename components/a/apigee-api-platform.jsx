import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mdv0qppql.css';
import '../../css/v/vpp8cv3zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mdv0qppql"/><path class="vpp8cv3zx"/></g>`,
		"fallback": "gcp:apigee-api-platform",
	});
}

export default Component;
