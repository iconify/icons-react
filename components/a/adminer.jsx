import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-kgf2jpm.css';
import '../../css/k/kje3pp6ll.css';
import '../../css/g/gp-ljubwj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-kgf2jpm"/><path class="kje3pp6ll"/><path class="gp-ljubwj"/>`,
		"fallback": "devicon:adminer",
	});
}

export default Component;
