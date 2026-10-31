import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fyrlk0i8z.css';
import '../../css/z/zmyv7ibsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fyrlk0i8z"/><path class="zmyv7ibsh"/></g>`,
		"fallback": "vadivam:ball-wave",
	});
}

export default Component;
