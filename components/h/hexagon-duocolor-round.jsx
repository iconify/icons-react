import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd8dqt85z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd8dqt85z"/>`,
		"fallback": "coolicons:hexagon-duocolor-round",
	});
}

export default Component;
