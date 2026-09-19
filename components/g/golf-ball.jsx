import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx18uy6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btx18uy6n"/>`,
		"fallback": "at-icons:golf-ball",
	});
}

export default Component;
