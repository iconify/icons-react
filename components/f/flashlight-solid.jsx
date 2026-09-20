import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7zyorbky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7zyorbky"/>`,
		"fallback": "streamline-plump:flashlight-solid",
	});
}

export default Component;
