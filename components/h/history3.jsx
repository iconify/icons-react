import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdeg-9-5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kdeg-9-5g"/>`,
		"fallback": "reicon:history3",
	});
}

export default Component;
