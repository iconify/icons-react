import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/v/v0bbswb4j.css';
import '../../css/q/qlkj-ye-j.css';
import '../../css/g/ga6yqxbkp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwCY6XcVw"><g class="hv130ab-t"><path class="v0bbswb4j"/><path class="qlkj-ye-j"/><path class="ga6yqxbkp"/></g></mask></defs><path mask="url(#SVGwCY6XcVw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-server",
	});
}

export default Component;
