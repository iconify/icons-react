import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awxbmobeb.css';
import '../../css/u/utdolccoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awxbmobeb"/><path class="utdolccoj"/>`,
		"fallback": "token:copi",
	});
}

export default Component;
