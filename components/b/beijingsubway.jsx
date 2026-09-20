import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmg9u37la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmg9u37la"/>`,
		"fallback": "simple-icons:beijingsubway",
	});
}

export default Component;
