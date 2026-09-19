import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/h/hlw7-vbbh.css';
import '../../css/m/mycvdyvtk.css';
import '../../css/g/gmgvlqxoh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="hlw7-vbbh"/><path class="mycvdyvtk"/><path class="gmgvlqxoh"/></g>`,
		"fallback": "icon-park:alignment-bottom-center",
	});
}

export default Component;
