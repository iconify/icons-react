import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/adzmbekhm.css';
import '../../css/v/vmp526bma.css';
import '../../css/o/oitlr0dsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="adzmbekhm"/><path class="vmp526bma"/><path class="oitlr0dsc"/></g>`,
		"fallback": "streamline-plump-color:html-five",
	});
}

export default Component;
