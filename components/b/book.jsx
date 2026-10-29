import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqzflwbuc.css';
import '../../css/o/o1pfvqbir.css';
import '../../css/g/gscq0clul.css';
import '../../css/o/orseybccy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqzflwbuc"/><path class="o1pfvqbir"/><path class="gscq0clul"/><path class="orseybccy"/>`,
		"fallback": "withicons-bauhaus:book",
	});
}

export default Component;
