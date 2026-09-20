import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuzafln4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xuzafln4s"/>`,
		"fallback": "streamline-flex:fragile-solid",
	});
}

export default Component;
