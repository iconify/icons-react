import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wyl1qyuew.css';
import '../../css/d/d6shn0b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wyl1qyuew"/><path class="d6shn0b8n"/></g>`,
		"fallback": "tabler:home-search",
	});
}

export default Component;
