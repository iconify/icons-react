import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/n/n7bll8bpo.css';
import '../../css/m/m128wu8fm.css';
import '../../css/f/f74lm8bkt.css';
import '../../css/r/rzc250yng.css';
import '../../css/b/b3-iglbcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="n7bll8bpo"/><path class="m128wu8fm"/><path class="f74lm8bkt"/><path class="rzc250yng"/><path class="b3-iglbcp"/></g>`,
		"fallback": "icon-park:bullet-map",
	});
}

export default Component;
