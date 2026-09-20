import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxe6m81df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxe6m81df"/>`,
		"fallback": "tabler:flip-horizontal",
	});
}

export default Component;
