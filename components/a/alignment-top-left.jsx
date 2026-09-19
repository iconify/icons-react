import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/x/x1881133c.css';
import '../../css/n/nt0-otbjo.css';
import '../../css/c/cgua6mcvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="x1881133c"/><path class="nt0-otbjo"/><path class="cgua6mcvp"/></g>`,
		"fallback": "icon-park:alignment-top-left",
	});
}

export default Component;
