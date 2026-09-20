import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqm1_6bzs.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqm1_6bzs"/>`,
		"fallback": "tdesign:film-filled",
	});
}

export default Component;
