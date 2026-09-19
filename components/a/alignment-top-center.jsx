import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/y/yz9q7dbbc.css';
import '../../css/i/i68n06bsl.css';
import '../../css/v/vmpuxyn0b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="yz9q7dbbc"/><path class="i68n06bsl"/><path class="vmpuxyn0b"/></g>`,
		"fallback": "icon-park:alignment-top-center",
	});
}

export default Component;
