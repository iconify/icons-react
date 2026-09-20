import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_lph5so.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3_lph5so"/>`,
		"fallback": "medical-icon:family-practice",
	});
}

export default Component;
