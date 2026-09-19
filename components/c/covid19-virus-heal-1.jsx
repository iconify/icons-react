import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b9nw66bsr.css';
import '../../css/l/lqlm572ur.css';
import '../../css/r/rwz-1vx6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b9nw66bsr"/><path class="lqlm572ur"/><path class="rwz-1vx6w"/></g>`,
		"fallback": "covid:covid19-virus-heal-1",
	});
}

export default Component;
