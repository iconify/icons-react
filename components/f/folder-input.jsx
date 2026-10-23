import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fxpctqbfn.css';
import '../../css/t/te-anbcii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fxpctqbfn"/><path class="te-anbcii"/></g>`,
		"fallback": "vadivam:folder-input",
	});
}

export default Component;
