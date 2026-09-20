import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iju3si41a.css';
import '../../css/t/tl21czs2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iju3si41a"/><path clip-rule="evenodd" class="tl21czs2y"/>`,
		"fallback": "lineicons:calculator-2",
	});
}

export default Component;
