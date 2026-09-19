import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hr1c9bcwd.css';
import '../../css/p/pxp48iyht.css';
import '../../css/m/msgncjdxc.css';
import '../../css/r/r2bw5qbdy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcSk3obYd"><g class="aql7dnt-u"><path class="hr1c9bcwd"/><path class="pxp48iyht"/><path class="msgncjdxc"/><path class="r2bw5qbdy"/></g></mask></defs><path mask="url(#SVGcSk3obYd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-lock",
	});
}

export default Component;
