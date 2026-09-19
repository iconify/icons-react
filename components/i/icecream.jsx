import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vjps25b7w.css';
import '../../css/q/qzcy3vbka.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vjps25b7w"/><path class="qzcy3vbka"/></g>`,
		"fallback": "icon-park-solid:icecream",
	});
}

export default Component;
