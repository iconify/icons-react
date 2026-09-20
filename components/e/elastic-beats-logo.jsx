import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bk06qtbwr.css';
import '../../css/o/ogl45pbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="bk06qtbwr"/><path class="ogl45pbuj"/></g>`,
		"fallback": "streamline-logos:elastic-beats-logo",
	});
}

export default Component;
