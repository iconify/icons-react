import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs6tz1b4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs6tz1b4j"/>`,
		"fallback": "icomoon-free:arrow-left2",
	});
}

export default Component;
