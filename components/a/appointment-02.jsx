import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6b-pdb0n.css';
import '../../css/n/nwflbwzxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l6b-pdb0n"/><path class="nwflbwzxg"/></g>`,
		"fallback": "hugeicons:appointment-02",
	});
}

export default Component;
