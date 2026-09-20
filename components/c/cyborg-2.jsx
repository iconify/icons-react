import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u66qmjuxo.css';
import '../../css/h/h_wsgtbli.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u66qmjuxo"/><path class="h_wsgtbli"/></g>`,
		"fallback": "streamline-plump:cyborg-2",
	});
}

export default Component;
