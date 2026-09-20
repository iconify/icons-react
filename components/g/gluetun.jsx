import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzrb3kt2q.css';
import '../../css/f/fxl6v0a7t.css';
import '../../css/p/po46rbc_u.css';
import '../../css/m/mid0temjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzrb3kt2q"/><path class="fxl6v0a7t"/><path class="po46rbc_u"/><path class="mid0temjj"/>`,
		"fallback": "selfhst:gluetun",
	});
}

export default Component;
