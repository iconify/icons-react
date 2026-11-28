import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln_o54bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln_o54bep"/>`,
		"fallback": "noviair:dna-search",
	});
}

export default Component;
