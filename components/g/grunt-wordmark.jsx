import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn3jo-bpl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yn3jo-bpl"/>`,
		"fallback": "devicon-plain:grunt-wordmark",
	});
}

export default Component;
