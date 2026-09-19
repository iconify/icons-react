import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jueq24bbv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jueq24bbv"/>`,
		"fallback": "dinkie-icons:file-ttf-small-filled",
	});
}

export default Component;
