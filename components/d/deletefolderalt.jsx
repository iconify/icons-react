import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfk1jebdx.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfk1jebdx"/>`,
		"fallback": "whh:deletefolderalt",
	});
}

export default Component;
