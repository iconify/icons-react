import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jckbmcb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jckbmcb3v"/>`,
		"fallback": "healthicons:heart-cardiogram-24px",
	});
}

export default Component;
