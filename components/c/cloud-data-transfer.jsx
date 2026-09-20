import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p2ltbqbef.css';
import '../../css/v/v-sc98koc.css';
import '../../css/u/u4eo03b7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="p2ltbqbef"/><path class="v-sc98koc"/><path class="u4eo03b7w"/></g>`,
		"fallback": "streamline-plump-color:cloud-data-transfer",
	});
}

export default Component;
