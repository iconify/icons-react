import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qymzto54k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qymzto54k"/>`,
		"fallback": "devicon-plain:bash",
	});
}

export default Component;
