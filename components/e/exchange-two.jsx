import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q13ik7jzl.css';
import '../../css/k/k0wmzacqy.css';
import '../../css/a/a5wufhhze.css';
import '../../css/a/azaugjfmo.css';
import '../../css/s/sf4eilb8p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="q13ik7jzl"/><path class="k0wmzacqy"/><path class="a5wufhhze"/><path class="azaugjfmo"/><path class="sf4eilb8p"/></g>`,
		"fallback": "icon-park:exchange-two",
	});
}

export default Component;
