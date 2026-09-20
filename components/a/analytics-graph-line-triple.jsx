import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5aa83b0x.css';
import '../../css/i/ivbnd-b6o.css';
import '../../css/j/jmwkcabyu.css';
import '../../css/c/c1dl4-sym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5aa83b0x"/><path class="ivbnd-b6o"/><path class="jmwkcabyu"/><path class="c1dl4-sym"/>`,
		"fallback": "streamline-freehand:analytics-graph-line-triple",
	});
}

export default Component;
