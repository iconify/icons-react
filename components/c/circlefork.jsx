import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbrh-8l3d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbrh-8l3d"/>`,
		"fallback": "whh:circlefork",
	});
}

export default Component;
