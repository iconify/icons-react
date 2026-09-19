import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zdr2iabse.css';
import '../../css/r/r7hlzjb8s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2OwFEdIS"><g class="aql7dnt-u"><path class="zdr2iabse"/><path class="r7hlzjb8s"/></g></mask></defs><path mask="url(#SVG2OwFEdIS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:exchange-two",
	});
}

export default Component;
