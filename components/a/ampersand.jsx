import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpbhpqbsr.css';

const viewBox = {"width":659,"height":727};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpbhpqbsr"/>`,
		"fallback": "ls:ampersand",
	});
}

export default Component;
