import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gl9hzw-en.css';
import '../../css/h/hh8mg9bzb.css';
import '../../css/u/u8ydsibgl.css';
import '../../css/q/qhupwp_8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="gl9hzw-en"/><path class="hh8mg9bzb"/><path class="u8ydsibgl"/><path class="qhupwp_8j"/></g>`,
		"fallback": "streamline-plump:global-learning",
	});
}

export default Component;
