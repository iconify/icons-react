import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqaqbm0ih.css';
import '../../css/t/tsm0aygxn.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqaqbm0ih"/><path class="tsm0aygxn"/>`,
		"fallback": "medical-icon:i-anesthesia",
	});
}

export default Component;
