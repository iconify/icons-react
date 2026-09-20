import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u7yp8bc2a.css';
import '../../css/c/clk8azu1e.css';
import '../../css/a/a9q--rvvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u7yp8bc2a"/><path class="clk8azu1e"/><path class="a9q--rvvw"/></g>`,
		"fallback": "streamline-freehand:credit-card-dollar",
	});
}

export default Component;
