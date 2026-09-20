import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-9ae1okw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-9ae1okw"/>`,
		"fallback": "pinhead:anguished-face-in-circle-outline",
	});
}

export default Component;
