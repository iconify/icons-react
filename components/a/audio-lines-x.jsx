import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjym-4_wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjym-4_wb"/>`,
		"fallback": "lucide:audio-lines-x",
	});
}

export default Component;
