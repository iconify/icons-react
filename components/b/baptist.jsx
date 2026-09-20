import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl93qub7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl93qub7e"/>`,
		"fallback": "roentgen:baptist",
	});
}

export default Component;
