import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xouoj826l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xouoj826l"/>`,
		"fallback": "uiw:down-square",
	});
}

export default Component;
