import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n77s3abja.css';
import '../../css/g/gy2a-_b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n77s3abja"/><path class="gy2a-_b-s"/></g>`,
		"fallback": "keyline-icons:baby-boy-duotone",
	});
}

export default Component;
