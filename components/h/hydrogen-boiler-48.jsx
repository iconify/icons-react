import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_kcw3bme.css';
import '../../css/w/wwc-vlvua.css';
import '../../css/q/qt4fsrbfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_kcw3bme"/><path class="wwc-vlvua"/><path class="qt4fsrbfi"/>`,
		"fallback": "energy-icons:hydrogen-boiler-48",
	});
}

export default Component;
