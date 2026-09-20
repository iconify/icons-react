import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9xv0vbnv.css';
import '../../css/j/j2px_1rfd.css';
import '../../css/w/w812ifbqt.css';
import '../../css/j/jlk8gwb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="g9xv0vbnv"/><path class="j2px_1rfd"/><circle class="w812ifbqt"/><circle class="jlk8gwb4v"/></g>`,
		"fallback": "meteor-icons:hamlet",
	});
}

export default Component;
