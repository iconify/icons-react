import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qefydqbol.css';
import '../../css/j/j9w45-lzi.css';
import '../../css/c/crcwzkbnx.css';
import '../../css/a/anjo4ybes.css';
import '../../css/t/tcr78sbka.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGn4ZGBbPW)" class="qefydqbol"/><path fill="url(#SVGbW8sDNFx)" class="j9w45-lzi"/><defs><linearGradient id="SVGn4ZGBbPW" x1="25.988" x2="-10.793" y1="29" y2="-7.781" gradientUnits="userSpaceOnUse"><stop class="crcwzkbnx"/><stop offset=".641" class="anjo4ybes"/></linearGradient><linearGradient id="SVGbW8sDNFx" x1="27.989" x2="19.398" y1="12.802" y2="3.012" gradientUnits="userSpaceOnUse"><stop class="tcr78sbka"/><stop offset="1" class="anjo4ybes"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:data-pie-32",
	});
}

export default Component;
