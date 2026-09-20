import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eislsacga.css';
import '../../css/h/hmcun9bjd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eislsacga"/><path class="hmcun9bjd"/>`,
		"fallback": "teenyicons:dribbble-solid",
	});
}

export default Component;
