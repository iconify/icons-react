import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/p89m2obdw.css';
import '../../css/c/cjfecbceb.css';
import '../../css/s/szmwbtbmw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhB20hcQf"><g class="v3_i3wktz"><path class="p89m2obdw"/><path class="cjfecbceb"/><path clip-rule="evenodd" class="szmwbtbmw"/></g></mask></defs><path mask="url(#SVGhB20hcQf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:financing-one",
	});
}

export default Component;
