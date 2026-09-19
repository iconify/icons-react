import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h77rvsg5y.css';
import '../../css/c/csorej16m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h77rvsg5y"/><path class="csorej16m"/>`,
		"fallback": "bx:bxl-angular",
	});
}

export default Component;
