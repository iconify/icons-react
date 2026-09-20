import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox5zndcug.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox5zndcug"/>`,
		"fallback": "osmic:hairdresser-14",
	});
}

export default Component;
