import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma4ppccnx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma4ppccnx"/>`,
		"fallback": "pinhead:four-square-court-with-ball",
	});
}

export default Component;
