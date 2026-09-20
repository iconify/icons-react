import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/b7h9cn33g.css';
import '../../css/z/zbni9b2lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="b7h9cn33g"/><path class="zbni9b2lu"/></g>`,
		"fallback": "streamline-sharp-color:application-add",
	});
}

export default Component;
