import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/d/d6etdobbg.css';
import '../../css/z/zlhrpyc2t.css';
import '../../css/g/gg2o1abfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="d6etdobbg"/><path class="zlhrpyc2t"/><path class="gg2o1abfa"/></g>`,
		"fallback": "flowbite:arrow-left-to-bracket-solid",
	});
}

export default Component;
