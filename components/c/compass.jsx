import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp9hcv0mm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp9hcv0mm"/>`,
		"fallback": "fa7-regular:compass",
	});
}

export default Component;
