import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udfnkbb0a.css';

const viewBox = {"width":1026,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udfnkbb0a"/>`,
		"fallback": "whh:flower",
	});
}

export default Component;
