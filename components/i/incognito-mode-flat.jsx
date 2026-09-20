import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjaa66b4k.css';
import '../../css/t/tf6s1ibhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xjaa66b4k"/><path class="tf6s1ibhi"/></g>`,
		"fallback": "streamline-sharp-color:incognito-mode-flat",
	});
}

export default Component;
