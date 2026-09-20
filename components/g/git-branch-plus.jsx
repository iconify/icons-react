import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta6eyqbdc.css';
import '../../css/f/fz0963b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ta6eyqbdc"/><path class="fz0963b-c"/></g>`,
		"fallback": "lucide:git-branch-plus",
	});
}

export default Component;
