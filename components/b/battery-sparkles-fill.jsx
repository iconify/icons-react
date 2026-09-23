import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gbgah5nkk.css';
import '../../css/h/hhbqq8bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gbgah5nkk"/><path class="hhbqq8bea"/></g>`,
		"fallback": "keyline-icons:battery-sparkles-fill",
	});
}

export default Component;
