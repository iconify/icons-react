import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zckrdzbek.css';
import '../../css/z/zpeej2btf.css';
import '../../css/r/rh0uu3bgf.css';
import '../../css/f/fxpidqb8s.css';
import '../../css/t/t8yppcb_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="zckrdzbek"/><path class="zpeej2btf"/><path class="rh0uu3bgf"/><path class="fxpidqb8s"/><path class="t8yppcb_g"/></g>`,
		"fallback": "icon-park:dragon-zodiac",
	});
}

export default Component;
