import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqug0npsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqug0npsx"/>`,
		"fallback": "noviair:arrow-big-right",
	});
}

export default Component;
