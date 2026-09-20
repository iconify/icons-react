import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlvz2mwag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlvz2mwag"/>`,
		"fallback": "lucide:gap-horizontal",
	});
}

export default Component;
