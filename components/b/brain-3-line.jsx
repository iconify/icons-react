import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsqdo2byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsqdo2byq"/>`,
		"fallback": "ri:brain-3-line",
	});
}

export default Component;
