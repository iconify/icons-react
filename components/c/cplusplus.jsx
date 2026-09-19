import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmo3-go0p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmo3-go0p"/>`,
		"fallback": "devicon-plain:cplusplus",
	});
}

export default Component;
