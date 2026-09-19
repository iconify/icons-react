import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g87wi1bai.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g87wi1bai"/>`,
		"fallback": "fa6-solid:fire-burner",
	});
}

export default Component;
