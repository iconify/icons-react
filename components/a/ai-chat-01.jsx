import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbugvpboz.css';
import '../../css/w/wr4hlrpkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bbugvpboz"/><path class="wr4hlrpkz"/></g>`,
		"fallback": "hugeicons:ai-chat-01",
	});
}

export default Component;
