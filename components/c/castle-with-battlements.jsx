import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zie-95bks.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zie-95bks"/>`,
		"fallback": "pinhead:castle-with-battlements",
	});
}

export default Component;
