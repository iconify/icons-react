import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvxjq0dhy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvxjq0dhy"/>`,
		"fallback": "game-icons:high-shot",
	});
}

export default Component;
