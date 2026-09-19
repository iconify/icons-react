import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw073acvj.css';

const viewBox = {"width":769,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw073acvj"/>`,
		"fallback": "whh:greenlightbulb",
	});
}

export default Component;
