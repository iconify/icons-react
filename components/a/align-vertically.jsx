import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/z67tnutlr.css';
import '../../css/v/v1s64tbtd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNs1c1b9f"><g class="v3_i3wktz"><path class="z67tnutlr"/><path class="v1s64tbtd"/></g></mask></defs><path mask="url(#SVGNs1c1b9f)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-vertically",
	});
}

export default Component;
