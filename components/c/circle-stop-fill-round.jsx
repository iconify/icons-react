import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9p7p2o5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9p7p2o5k"/>`,
		"fallback": "coolicons:circle-stop-fill-round",
	});
}

export default Component;
