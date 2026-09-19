import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_swcb_o.css';
import '../../css/z/zrcrh4bnb.css';
import '../../css/j/jxmh2ibtp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGltRESdbX"><g class="v1_swcb_o"><circle class="zrcrh4bnb"/><path class="jxmh2ibtp"/></g></mask></defs><path mask="url(#SVGltRESdbX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baseball-bat",
	});
}

export default Component;
