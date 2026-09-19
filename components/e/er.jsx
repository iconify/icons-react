import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/msqbht_3s.css';
import '../../css/l/ly148kbmp.css';
import '../../css/z/z9ptkzzsm.css';
import '../../css/v/vihk52k_j.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="msqbht_3s"/><path class="ly148kbmp"/><path class="z9ptkzzsm"/><path class="vihk52k_j"/></g>`,
		"fallback": "flagpack:er",
	});
}

export default Component;
