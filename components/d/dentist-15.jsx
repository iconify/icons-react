import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el31n6bjl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el31n6bjl"/>`,
		"fallback": "maki:dentist-15",
	});
}

export default Component;
