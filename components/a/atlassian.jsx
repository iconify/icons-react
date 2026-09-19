import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih2j00bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih2j00bot"/>`,
		"fallback": "bxl:atlassian",
	});
}

export default Component;
