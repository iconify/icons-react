import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywvmuh6-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywvmuh6-a"/>`,
		"fallback": "coolicons:fridge-round",
	});
}

export default Component;
