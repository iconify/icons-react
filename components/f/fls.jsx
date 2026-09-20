import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/citlsybef.css';
import '../../css/k/kd8sdbbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="citlsybef"/><path class="kd8sdbbzj"/>`,
		"fallback": "token:fls",
	});
}

export default Component;
