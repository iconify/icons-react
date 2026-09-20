import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn5rgey5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn5rgey5y"/>`,
		"fallback": "lucide-lab:grid-lines",
	});
}

export default Component;
