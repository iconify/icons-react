import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6l5hbtny.css';
import '../../css/d/daffd7btx.css';
import '../../css/x/xa-ap0bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r6l5hbtny"/><path class="daffd7btx"/><path class="xa-ap0bcl"/></g>`,
		"fallback": "vadivam:bell-electric",
	});
}

export default Component;
