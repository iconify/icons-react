import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecg4d0bin.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecg4d0bin"/>`,
		"fallback": "codicon:fish3-sad",
	});
}

export default Component;
