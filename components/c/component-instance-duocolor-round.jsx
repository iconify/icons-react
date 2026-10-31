import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkv3n0bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkv3n0bjw"/>`,
		"fallback": "coolicons:component-instance-duocolor-round",
	});
}

export default Component;
