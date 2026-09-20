import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lfc-8-ano.css';
import '../../css/b/bjoht_2zj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="lfc-8-ano"/><path class="bjoht_2zj"/></g>`,
		"fallback": "streamline-plump:building-office",
	});
}

export default Component;
