import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt6gxp18b.css';
import '../../css/u/u5p0aybko.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt6gxp18b"/><path class="u5p0aybko"/>`,
		"fallback": "devicon:grails",
	});
}

export default Component;
