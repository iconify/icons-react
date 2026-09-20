import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjnuvrbls.css';
import '../../css/o/oco7h52sv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cjnuvrbls"/><path class="oco7h52sv"/>`,
		"fallback": "qlementine-icons:bring-to-back-16",
	});
}

export default Component;
