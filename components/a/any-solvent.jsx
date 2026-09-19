import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax2g1qbyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax2g1qbyp"/>`,
		"fallback": "ps:any-solvent",
	});
}

export default Component;
