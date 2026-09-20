import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqgu7wbdd.css';
import '../../css/f/f7k04-ada.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqgu7wbdd"/><path clip-rule="evenodd" class="f7k04-ada"/>`,
		"fallback": "teenyicons:archive-solid",
	});
}

export default Component;
