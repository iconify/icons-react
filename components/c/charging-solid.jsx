import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3jg-bcer.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3jg-bcer"/>`,
		"fallback": "streamline-flex:charging-solid",
	});
}

export default Component;
