import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g48xyybcc.css';
import '../../css/h/hym4ejb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g48xyybcc"/><path class="hym4ejb0k"/></g>`,
		"fallback": "tabler:blender",
	});
}

export default Component;
