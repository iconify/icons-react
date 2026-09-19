import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmr9iccga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmr9iccga"/>`,
		"fallback": "grommet-icons:gem",
	});
}

export default Component;
