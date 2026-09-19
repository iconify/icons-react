import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csip7ekyr.css';

const viewBox = {"width":500,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csip7ekyr"/>`,
		"fallback": "file-icons:cpcdosc",
	});
}

export default Component;
