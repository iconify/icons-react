import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pe_b4y5aw.css';
import '../../css/y/yqbctvbha.css';
import '../../css/d/d-v0vabmn.css';
import '../../css/o/oeom-qblu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="pe_b4y5aw"/><path class="yqbctvbha"/><path class="d-v0vabmn"/><path class="oeom-qblu"/></g>`,
		"fallback": "streamline-plump-color:half-star-2",
	});
}

export default Component;
