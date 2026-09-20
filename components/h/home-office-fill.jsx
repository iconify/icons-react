import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz16-ia_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz16-ia_s"/>`,
		"fallback": "ri:home-office-fill",
	});
}

export default Component;
