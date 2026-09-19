import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhr85s48m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qhr85s48m"/>`,
		"fallback": "gravity-ui:folder-arrow-up-in",
	});
}

export default Component;
