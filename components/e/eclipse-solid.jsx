import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw7a4lb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw7a4lb-p"/>`,
		"fallback": "mynaui:eclipse-solid",
	});
}

export default Component;
