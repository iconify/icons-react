import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p_2vumbtx.css';
import '../../css/o/omh-9ncmg.css';
import '../../css/a/a6q7xs_re.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="p_2vumbtx"/><path class="omh-9ncmg"/><path class="a6q7xs_re"/></g>`,
		"fallback": "streamline-plump-color:hot-spring",
	});
}

export default Component;
