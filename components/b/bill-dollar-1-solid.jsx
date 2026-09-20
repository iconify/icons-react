import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_cmk7-2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_cmk7-2k"/>`,
		"fallback": "streamline-sharp:bill-dollar-1-solid",
	});
}

export default Component;
