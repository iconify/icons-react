import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inodzebku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inodzebku"/>`,
		"fallback": "ri:film-ai-line",
	});
}

export default Component;
