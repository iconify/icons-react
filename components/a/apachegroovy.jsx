import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gduskbc2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gduskbc2j"/>`,
		"fallback": "simple-icons:apachegroovy",
	});
}

export default Component;
