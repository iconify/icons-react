import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bng7-4bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bng7-4bni"/>`,
		"fallback": "lucide:cloud-download",
	});
}

export default Component;
