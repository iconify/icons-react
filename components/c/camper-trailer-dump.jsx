import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob72q5bva.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob72q5bva"/>`,
		"fallback": "temaki:camper-trailer-dump",
	});
}

export default Component;
