import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wyyqbq60x.css';
import '../../css/a/ay929fupc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wyyqbq60x"/><path class="ay929fupc"/></g>`,
		"fallback": "streamline-flex:airship",
	});
}

export default Component;
