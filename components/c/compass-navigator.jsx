import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b8txi1beu.css';
import '../../css/k/kpiprfbbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="b8txi1beu"/><path class="kpiprfbbg"/></g>`,
		"fallback": "streamline-plump:compass-navigator",
	});
}

export default Component;
