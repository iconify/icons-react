import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pa3guob9q.css';
import '../../css/p/pl1bqabkz.css';
import '../../css/e/eweuc1kpp.css';
import '../../css/d/dja1jdboi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path clip-rule="evenodd" class="pa3guob9q"/><path class="pl1bqabkz"/><path class="eweuc1kpp"/><path class="dja1jdboi"/></g>`,
		"fallback": "icon-park:building-three",
	});
}

export default Component;
