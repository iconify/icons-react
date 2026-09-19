import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rhj0z76tl.css';
import '../../css/p/p606jns8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rhj0z76tl"/><path class="p606jns8s"/></g>`,
		"fallback": "icon-park:flirt",
	});
}

export default Component;
