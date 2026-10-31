import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnof2usyk.css';
import '../../css/y/y9syc8btb.css';
import '../../css/j/jqee0iips.css';
import '../../css/c/cgdj23eok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gnof2usyk"/><path class="y9syc8btb"/><path class="jqee0iips"/><path class="cgdj23eok"/></g>`,
		"fallback": "streamline-kameleon-color:enter-key-pop",
	});
}

export default Component;
