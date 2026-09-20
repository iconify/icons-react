import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/semfdcbfd.css';
import '../../css/z/z_i1yho6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="semfdcbfd"/><path class="z_i1yho6m"/></g>`,
		"fallback": "streamline-plump-color:hierarchy-1",
	});
}

export default Component;
