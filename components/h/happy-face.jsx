import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4haehu2w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4haehu2w"/>`,
		"fallback": "at-icons:happy-face",
	});
}

export default Component;
