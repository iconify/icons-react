import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/b/bqmx6iqsg.css';
import '../../css/y/yahk85bpk.css';
import '../../css/h/h5hctebkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="bqmx6iqsg"/><path class="yahk85bpk"/><path class="h5hctebkm"/></g>`,
		"fallback": "icon-park:alignment-left-center",
	});
}

export default Component;
