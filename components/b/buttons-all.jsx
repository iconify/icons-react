import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/evf6obc2o.css';
import '../../css/b/b0oucibwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="evf6obc2o"/><path class="b0oucibwu"/></g>`,
		"fallback": "streamline-sharp:buttons-all",
	});
}

export default Component;
