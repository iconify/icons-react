import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i--wlebtf.css';
import '../../css/g/geovq2bcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path clip-rule="evenodd" class="i--wlebtf"/><path class="geovq2bcd"/></g>`,
		"fallback": "icon-park:inner-shadow-left",
	});
}

export default Component;
