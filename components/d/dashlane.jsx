import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqzky_tya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqzky_tya"/>`,
		"fallback": "thesvg:dashlane",
	});
}

export default Component;
