import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/x/xxb39ebcb.css';
import '../../css/r/rw-j_20-m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDICyrcTj"><g class="hv130ab-t"><path clip-rule="evenodd" class="xxb39ebcb"/><path class="rw-j_20-m"/></g></mask></defs><path mask="url(#SVGDICyrcTj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:inner-shadow-right",
	});
}

export default Component;
