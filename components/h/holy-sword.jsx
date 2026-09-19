import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/alx8q2bso.css';
import '../../css/a/as6-xr61g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWZkSzcLz"><g class="aql7dnt-u"><path class="alx8q2bso"/><path class="as6-xr61g"/></g></mask></defs><path mask="url(#SVGWZkSzcLz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:holy-sword",
	});
}

export default Component;
