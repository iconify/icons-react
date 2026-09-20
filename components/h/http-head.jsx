import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adk_bn-dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adk_bn-dt"/>`,
		"fallback": "tabler:http-head",
	});
}

export default Component;
