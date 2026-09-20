import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/befzv0bdn.css';
import '../../css/j/jm6hiq3gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="befzv0bdn"/><path class="jm6hiq3gk"/></g>`,
		"fallback": "vadivam:bot",
	});
}

export default Component;
