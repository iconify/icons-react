import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik7l-vbda.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik7l-vbda"/>`,
		"fallback": "pinhead:gasoline-pump-with-d",
	});
}

export default Component;
