import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yo7v3ew5f.css';
import '../../css/b/brjbdzwmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yo7v3ew5f"/><path class="brjbdzwmk"/></g>`,
		"fallback": "vadivam:drill",
	});
}

export default Component;
