import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysga9xgmy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysga9xgmy"/>`,
		"fallback": "bi:file-earmark-code-fill",
	});
}

export default Component;
