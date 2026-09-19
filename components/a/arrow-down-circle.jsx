import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttssy_8tz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttssy_8tz"/>`,
		"fallback": "bi:arrow-down-circle",
	});
}

export default Component;
