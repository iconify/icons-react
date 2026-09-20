import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/hzcqba.css';
import '../../css/s/sbei0c.css';
import '../../css/g/gvulyl.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c hzcqba"/><path class="a0m25c sbei0c"/><path class="a0m25c gvulyl"/>`,
		"fallback": "line-md:arrow-align-center",
	});
}

export default Component;
