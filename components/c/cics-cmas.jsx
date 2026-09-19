import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djwm78b0h.css';
import '../../css/g/gbgrvybzj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djwm78b0h"/><path class="gbgrvybzj"/>`,
		"fallback": "carbon:cics-cmas",
	});
}

export default Component;
