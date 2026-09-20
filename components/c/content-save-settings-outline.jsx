import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzjes58en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzjes58en"/>`,
		"fallback": "mdi:content-save-settings-outline",
	});
}

export default Component;
