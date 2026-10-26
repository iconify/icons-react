import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya2h7zbxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya2h7zbxa"/>`,
		"fallback": "doodle-icons:clouds",
	});
}

export default Component;
