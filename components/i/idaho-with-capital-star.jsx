import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn3q1p62s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn3q1p62s"/>`,
		"fallback": "pinhead:idaho-with-capital-star",
	});
}

export default Component;
