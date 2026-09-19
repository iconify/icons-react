import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et74666vx.css';

const viewBox = {"width":832,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et74666vx"/>`,
		"fallback": "whh:hangouts",
	});
}

export default Component;
