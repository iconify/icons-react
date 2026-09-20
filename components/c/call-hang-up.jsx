import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/afpq2wb1q.css';
import '../../css/d/dqfri9bhg.css';
import '../../css/a/a0yrpdb5h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="afpq2wb1q"/><path class="dqfri9bhg"/><path class="a0yrpdb5h"/></g>`,
		"fallback": "streamline-plump-color:call-hang-up",
	});
}

export default Component;
