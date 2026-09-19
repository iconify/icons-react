import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/q/qkj_e9ogh.css';
import '../../css/v/vei23bccy.css';
import '../../css/h/hgnqob8wp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBpdbbecm"><g class="gopnm44um"><path class="qkj_e9ogh"/><path class="vei23bccy"/><path class="hgnqob8wp"/></g></mask></defs><path mask="url(#SVGBpdbbecm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:church-two",
	});
}

export default Component;
