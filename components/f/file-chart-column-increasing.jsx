import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xax2ld-hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xax2ld-hf"/>`,
		"fallback": "vadivam:file-chart-column-increasing",
	});
}

export default Component;
