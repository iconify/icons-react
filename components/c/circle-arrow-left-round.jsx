import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msfe23xvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msfe23xvm"/>`,
		"fallback": "coolicons:circle-arrow-left-round",
	});
}

export default Component;
