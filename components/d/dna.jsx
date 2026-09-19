import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn5ie-bfc.css';
import '../../css/y/y1lscctme.css';
import '../../css/p/pm4oodhmv.css';

const viewBox = {"width":13,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn5ie-bfc"/><path class="y1lscctme"/><path class="pm4oodhmv"/>`,
		"fallback": "fontisto:dna",
	});
}

export default Component;
