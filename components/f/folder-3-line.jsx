import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv2_4wbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv2_4wbpj"/>`,
		"fallback": "mingcute:folder-3-line",
	});
}

export default Component;
