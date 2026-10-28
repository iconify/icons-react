import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/myj-5sbyn.css';
import '../../css/a/a7y3gs5qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="myj-5sbyn"/><path class="a7y3gs5qm"/></g>`,
		"fallback": "codex:box",
	});
}

export default Component;
