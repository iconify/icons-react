import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/macbe7bdm.css';
import '../../css/l/lw3w-bciy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="macbe7bdm"/><path class="lw3w-bciy"/>`,
		"fallback": "devicon-plain:appwrite",
	});
}

export default Component;
