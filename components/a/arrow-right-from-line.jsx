import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa48ywbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa48ywbkx"/>`,
		"fallback": "vadivam:arrow-right-from-line",
	});
}

export default Component;
