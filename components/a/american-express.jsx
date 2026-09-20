import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwi5op4lm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwi5op4lm"/>`,
		"fallback": "thesvg:american-express",
	});
}

export default Component;
