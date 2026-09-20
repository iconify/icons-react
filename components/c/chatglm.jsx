import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezqz6kpnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezqz6kpnv"/>`,
		"fallback": "thesvg:chatglm",
	});
}

export default Component;
