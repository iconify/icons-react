import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k09fsv2wd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k09fsv2wd"/>`,
		"fallback": "devicon-plain:huggingface",
	});
}

export default Component;
