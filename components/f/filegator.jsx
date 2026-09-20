import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoc3v9b4e.css';
import '../../css/b/bdm_vlbvg.css';
import '../../css/j/jszzeeb0n.css';
import '../../css/p/p5t38hp5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoc3v9b4e"/><path class="bdm_vlbvg"/><path class="jszzeeb0n"/><path class="p5t38hp5t"/>`,
		"fallback": "selfhst:filegator",
	});
}

export default Component;
