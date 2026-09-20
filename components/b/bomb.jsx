import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/khkp-mbgo.css';
import '../../css/z/z5iaqeazo.css';
import '../../css/a/ae005kbnl.css';
import '../../css/b/bpjq-fbrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="khkp-mbgo"/><path class="z5iaqeazo"/><path class="ae005kbnl"/><path class="bpjq-fbrz"/></g>`,
		"fallback": "streamline-plump-color:bomb",
	});
}

export default Component;
