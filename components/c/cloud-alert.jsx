import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su_5k-51a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su_5k-51a"/>`,
		"fallback": "lucide:cloud-alert",
	});
}

export default Component;
