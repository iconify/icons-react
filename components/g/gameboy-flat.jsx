import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kk4rpcdzx.css';
import '../../css/e/eavvoobze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kk4rpcdzx"/><path class="eavvoobze"/></g>`,
		"fallback": "streamline-sharp-color:gameboy-flat",
	});
}

export default Component;
