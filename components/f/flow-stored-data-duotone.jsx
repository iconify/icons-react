import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyuygn6di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary qyuygn6di"/>`,
		"fallback": "iconaut:flow-stored-data-duotone",
	});
}

export default Component;
