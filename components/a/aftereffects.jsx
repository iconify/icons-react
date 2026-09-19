import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0cuc_bpo.css';
import '../../css/h/h-ofk3o6j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0cuc_bpo"/><path class="h-ofk3o6j"/>`,
		"fallback": "devicon-plain:aftereffects",
	});
}

export default Component;
