import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x6v68rswn.css';
import '../../css/d/d6anxsumq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="x6v68rswn"/><path class="d6anxsumq"/></g>`,
		"fallback": "streamline-plump:graphic-template-website-ui",
	});
}

export default Component;
