import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_swcb_o.css';
import '../../css/a/aoabsmt9b.css';
import '../../css/c/cjjtizl0b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEIHzIcGC"><g class="v1_swcb_o"><circle class="aoabsmt9b"/><path class="cjjtizl0b"/></g></mask></defs><path mask="url(#SVGEIHzIcGC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:instagram-one",
	});
}

export default Component;
