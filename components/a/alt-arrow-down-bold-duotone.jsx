import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4fzscdmy.css';
import '../../css/f/fjjhjc8fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4fzscdmy"/><path class="fjjhjc8fm"/>`,
		"fallback": "solar:alt-arrow-down-bold-duotone",
	});
}

export default Component;
