import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qnqo27bhg.css';
import '../../css/g/ghhhrbbhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qnqo27bhg"/><path class="ghhhrbbhh"/></g>`,
		"fallback": "streamline-plump:division-circle",
	});
}

export default Component;
