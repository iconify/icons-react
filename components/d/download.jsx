import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yokmq2bwt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yokmq2bwt"/>`,
		"fallback": "dinkie-icons:download",
	});
}

export default Component;
