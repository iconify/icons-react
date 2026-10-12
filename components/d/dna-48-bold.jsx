import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9zz_l4jl.css';
import '../../css/m/m8f41sb6p.css';
import '../../css/c/cnvsi8cop.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9zz_l4jl"/><path class="m8f41sb6p"/><path class="cnvsi8cop"/>`,
		"fallback": "energy-icons:dna-48-bold",
	});
}

export default Component;
