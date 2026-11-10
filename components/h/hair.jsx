import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du9gf8b7s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du9gf8b7s"/>`,
		"fallback": "at-icons:hair",
	});
}

export default Component;
