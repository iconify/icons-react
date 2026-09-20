import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnacsvbpp.css';
import '../../css/t/t-rbbb6gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnacsvbpp"/><path clip-rule="evenodd" class="t-rbbb6gw"/>`,
		"fallback": "si:ai-chat-fill",
	});
}

export default Component;
