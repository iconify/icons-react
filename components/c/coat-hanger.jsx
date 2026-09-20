import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu66jk8uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu66jk8uv"/>`,
		"fallback": "lucide-lab:coat-hanger",
	});
}

export default Component;
