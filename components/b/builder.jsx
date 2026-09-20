import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7w11bbww.css';
import '../../css/n/n0i6_ooxq.css';
import '../../css/w/w652dl6zr.css';

const viewBox = {"width":256,"height":293};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7w11bbww"/><path class="n0i6_ooxq"/><path class="w652dl6zr"/>`,
		"fallback": "thesvg-color:builder",
	});
}

export default Component;
