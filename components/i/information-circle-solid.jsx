import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksirtqb_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ksirtqb_w"/>`,
		"fallback": "streamline-plump:information-circle-solid",
	});
}

export default Component;
