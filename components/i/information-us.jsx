import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcjq7gb3l.css';
import '../../css/h/hgh3anbek.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcjq7gb3l"/><path class="hgh3anbek"/>`,
		"fallback": "medical-icon:information-us",
	});
}

export default Component;
