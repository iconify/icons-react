import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jls4p8yza.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jls4p8yza"/>`,
		"fallback": "pinhead:bird-flying",
	});
}

export default Component;
