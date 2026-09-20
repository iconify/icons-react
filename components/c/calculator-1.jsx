import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/k/kp28uqbqs.css';
import '../../css/k/kjxsrjlhw.css';
import '../../css/w/wp-94j-dn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ss8bevb4j"/><path class="kp28uqbqs"/><path class="kjxsrjlhw"/><path class="wp-94j-dn"/></g>`,
		"fallback": "streamline-plump-color:calculator-1",
	});
}

export default Component;
