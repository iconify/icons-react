import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep01_69oa.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep01_69oa"/>`,
		"fallback": "wpf:dining-room",
	});
}

export default Component;
