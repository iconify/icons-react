import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqzc1ubjd.css';
import '../../css/q/qacek3vgo.css';
import '../../css/x/xi6dt8buz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xqzc1ubjd"/><path class="qacek3vgo"/><path class="xi6dt8buz"/></g>`,
		"fallback": "icon-park-outline:germs",
	});
}

export default Component;
