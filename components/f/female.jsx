import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9gomjvpi.css';
import '../../css/a/azt0wtbsk.css';
import '../../css/u/uafmf0wcy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9gomjvpi"/><path class="azt0wtbsk"/><path class="uafmf0wcy"/>`,
		"fallback": "ep:female",
	});
}

export default Component;
