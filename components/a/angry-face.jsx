import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b26n3db1c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b26n3db1c"/>`,
		"fallback": "pinhead:angry-face",
	});
}

export default Component;
