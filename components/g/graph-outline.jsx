import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zec3nwpcl.css';
import '../../css/q/qwpceeq4m.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/atjk8mbde.css';
import '../../css/j/j-npdpb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG2sHfXSKM" class="zec3nwpcl"/><path id="SVGeBGscdQQ" class="qwpceeq4m"/></defs><g class="h01tyzbfu"><use href="#SVG2sHfXSKM" class="atjk8mbde"/><use href="#SVGeBGscdQQ" class="j-npdpb0r"/><use href="#SVG2sHfXSKM" class="atjk8mbde"/><use href="#SVGeBGscdQQ" class="j-npdpb0r"/></g>`,
		"fallback": "bitcoin-icons:graph-outline",
	});
}

export default Component;
