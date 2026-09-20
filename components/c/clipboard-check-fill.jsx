import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqm1kybcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqm1kybcv"/>`,
		"fallback": "si:clipboard-check-fill",
	});
}

export default Component;
