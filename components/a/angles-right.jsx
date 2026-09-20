import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txd2f3f6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txd2f3f6i"/>`,
		"fallback": "meteor-icons:angles-right",
	});
}

export default Component;
