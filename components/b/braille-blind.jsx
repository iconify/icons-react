import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/umzdidcsz.css';
import '../../css/e/ezi8_jb2i.css';
import '../../css/k/k77-m-b2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="umzdidcsz"/><path class="ezi8_jb2i"/><path class="k77-m-b2n"/></g>`,
		"fallback": "streamline-plump-color:braille-blind",
	});
}

export default Component;
