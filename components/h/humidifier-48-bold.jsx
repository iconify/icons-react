import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlyw1hblf.css';
import '../../css/v/v4j2tfucd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlyw1hblf"/><path class="v4j2tfucd"/>`,
		"fallback": "energy-icons:humidifier-48-bold",
	});
}

export default Component;
