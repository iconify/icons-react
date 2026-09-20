import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dftf9rvck.css';
import '../../css/z/z3duhi67e.css';
import '../../css/c/c0f3cdbuc.css';
import '../../css/g/gnovq9q5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dftf9rvck"/><path class="z3duhi67e"/><path class="c0f3cdbuc"/><path class="gnovq9q5w"/></g>`,
		"fallback": "lets-icons:atom",
	});
}

export default Component;
