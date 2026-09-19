import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trbai4bzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trbai4bzv"/>`,
		"fallback": "bxs:factory",
	});
}

export default Component;
