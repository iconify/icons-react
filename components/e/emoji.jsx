import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_eu7vqxz.css';
import '../../css/l/l-ctnfbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_eu7vqxz"/><path class="l-ctnfbtr"/>`,
		"fallback": "grommet-icons:emoji",
	});
}

export default Component;
