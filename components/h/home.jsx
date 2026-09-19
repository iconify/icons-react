import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/s0v14hb6d.css';
import '../../css/b/b2ahrlpzy.css';
import '../../css/o/ofpxigb9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="s0v14hb6d"/><path class="b2ahrlpzy"/><path class="ofpxigb9s"/></g>`,
		"fallback": "icon-park:home",
	});
}

export default Component;
