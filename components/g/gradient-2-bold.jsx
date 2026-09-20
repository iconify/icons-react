import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opd2cccpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="opd2cccpt"/>`,
		"fallback": "streamline-ultimate:gradient-2-bold",
	});
}

export default Component;
