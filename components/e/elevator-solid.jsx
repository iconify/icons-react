import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glyhv4jss.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="glyhv4jss"/>`,
		"fallback": "streamline-flex:elevator-solid",
	});
}

export default Component;
