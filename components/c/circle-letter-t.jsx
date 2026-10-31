import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibho_3u6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibho_3u6z"/>`,
		"fallback": "vadivam:circle-letter-t",
	});
}

export default Component;
