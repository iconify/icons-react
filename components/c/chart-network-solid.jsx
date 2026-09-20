import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbt-of79j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbt-of79j"/>`,
		"fallback": "pixel:chart-network-solid",
	});
}

export default Component;
