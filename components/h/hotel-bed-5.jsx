import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uuokjcc1w.css';
import '../../css/n/noma2aced.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="uuokjcc1w"/><path class="noma2aced"/></g>`,
		"fallback": "streamline-plump:hotel-bed-5",
	});
}

export default Component;
