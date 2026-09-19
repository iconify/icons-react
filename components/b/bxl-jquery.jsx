import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb02gcc3k.css';
import '../../css/b/b9ttszcks.css';
import '../../css/k/kh4p7s4vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb02gcc3k"/><path class="b9ttszcks"/><path class="kh4p7s4vc"/>`,
		"fallback": "bx:bxl-jquery",
	});
}

export default Component;
