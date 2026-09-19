import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/b/beip37bcn.css';
import '../../css/w/w4fezhbzj.css';
import '../../css/q/qyky4f0vl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="beip37bcn"/><path class="w4fezhbzj"/><path class="qyky4f0vl"/></g>`,
		"fallback": "icon-park:dashboard",
	});
}

export default Component;
