import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwnpb3bjg.css';

const viewBox = {"width":560,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwnpb3bjg"/>`,
		"fallback": "il:book",
	});
}

export default Component;
