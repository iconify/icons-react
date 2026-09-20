import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gm2ylqbxh.css';
import '../../css/r/rk07ix9jr.css';
import '../../css/m/m3uyw9bne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gm2ylqbxh"/><path clip-rule="evenodd" class="rk07ix9jr"/><path class="m3uyw9bne"/></g>`,
		"fallback": "streamline-plump-color:document-certificate-flat",
	});
}

export default Component;
