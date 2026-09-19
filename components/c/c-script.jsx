import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt55pmb_j.css';

const viewBox = {"width":459,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt55pmb_j"/>`,
		"fallback": "file-icons:c-script",
	});
}

export default Component;
