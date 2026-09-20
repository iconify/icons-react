import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afhl67o8q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afhl67o8q"/>`,
		"fallback": "temaki:dog-shelter",
	});
}

export default Component;
