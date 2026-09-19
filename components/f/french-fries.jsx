import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/amzbzxb8s.css';
import '../../css/g/gr93ygbgb.css';
import '../../css/b/bi3icjb1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="amzbzxb8s"/><path class="gr93ygbgb"/><ellipse class="bi3icjb1j"/></g>`,
		"fallback": "icon-park-outline:french-fries",
	});
}

export default Component;
