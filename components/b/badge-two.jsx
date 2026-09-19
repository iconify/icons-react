import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cgwwmcz6s.css';
import '../../css/z/zja1041ff.css';
import '../../css/m/mtfmea0pv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="cgwwmcz6s"/><path class="zja1041ff"/><path class="mtfmea0pv"/></g>`,
		"fallback": "icon-park:badge-two",
	});
}

export default Component;
