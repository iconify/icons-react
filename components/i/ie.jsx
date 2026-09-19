import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zsd-xescs.css';
import '../../css/r/ray9_ac3o.css';
import '../../css/p/pmz80t_au.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zsd-xescs"/><path class="ray9_ac3o"/><path class="pmz80t_au"/></g>`,
		"fallback": "flagpack:ie",
	});
}

export default Component;
