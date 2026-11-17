import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnn1p_bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnn1p_bvo"/>`,
		"fallback": "lucide:arrows-to-axis-vertical",
	});
}

export default Component;
