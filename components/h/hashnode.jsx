import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdp2_hgrm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdp2_hgrm"/>`,
		"fallback": "fa7-brands:hashnode",
	});
}

export default Component;
