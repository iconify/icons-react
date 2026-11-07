import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plk4vjb9x.css';
import '../../css/t/tl7q7ybjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="plk4vjb9x"/><path class="tl7q7ybjr"/>`,
		"fallback": "solar:chef-hat-heart-bold",
	});
}

export default Component;
