import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/yj0jynlgh.css';
import '../../css/d/d0u4wqjht.css';
import '../../css/q/q-9_5cbnp.css';
import '../../css/g/gkcxhdc8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="yj0jynlgh"/><path class="d0u4wqjht"/><path class="q-9_5cbnp"/><path class="gkcxhdc8q"/></g>`,
		"fallback": "streamline-sharp-color:eject-square",
	});
}

export default Component;
