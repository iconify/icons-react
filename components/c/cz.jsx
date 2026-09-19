import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9l3vac1v.css';
import '../../css/x/x8lyhp39e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9l3vac1v"/><path class="x8lyhp39e"/>`,
		"fallback": "carbon:cz",
	});
}

export default Component;
