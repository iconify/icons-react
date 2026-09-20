import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at8p_kh2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at8p_kh2e"/>`,
		"fallback": "thesvg-color:instructables",
	});
}

export default Component;
