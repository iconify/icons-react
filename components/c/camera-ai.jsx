import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dx3djob0r.css';
import '../../css/k/krc89nbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dx3djob0r"/><path class="krc89nbff"/></g>`,
		"fallback": "hugeicons:camera-ai",
	});
}

export default Component;
