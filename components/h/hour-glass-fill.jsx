import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw_gay31a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw_gay31a"/>`,
		"fallback": "mage:hour-glass-fill",
	});
}

export default Component;
