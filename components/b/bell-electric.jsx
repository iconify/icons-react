import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6l5hbtny.css';
import '../../css/r/rnekh2i5t.css';
import '../../css/x/x11gayt5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r6l5hbtny"/><path class="rnekh2i5t"/><path class="x11gayt5g"/></g>`,
		"fallback": "vadivam:bell-electric",
	});
}

export default Component;
