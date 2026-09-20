import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gg6l8lb4j.css';
import '../../css/n/nrknstb3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="gg6l8lb4j"/><path class="nrknstb3z"/></g>`,
		"fallback": "streamline-plump-color:box-waterproof",
	});
}

export default Component;
