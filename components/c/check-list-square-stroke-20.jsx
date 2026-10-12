import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldh8llb9w.css';
import '../../css/o/o8vspab8g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldh8llb9w"/><path class="o8vspab8g"/>`,
		"fallback": "garden:check-list-square-stroke-20",
	});
}

export default Component;
