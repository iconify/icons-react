import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrml5ge7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrml5ge7n"/>`,
		"fallback": "simple-icons:cilium",
	});
}

export default Component;
