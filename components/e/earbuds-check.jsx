import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jvj6dybkw.css';
import '../../css/u/uthr8pbrw.css';
import '../../css/i/i1xl_iske.css';
import '../../css/r/rb7e2jquh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jvj6dybkw"/><path class="uthr8pbrw"/><path class="i1xl_iske"/><path class="rb7e2jquh"/></g>`,
		"fallback": "andrsrxn:earbuds-check",
	});
}

export default Component;
