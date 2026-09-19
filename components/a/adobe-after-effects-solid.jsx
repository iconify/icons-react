import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv4m5hauv.css';
import '../../css/t/tma0dchkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv4m5hauv"/><path clip-rule="evenodd" class="tma0dchkx"/>`,
		"fallback": "basil:adobe-after-effects-solid",
	});
}

export default Component;
