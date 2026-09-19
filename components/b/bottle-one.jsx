import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/syw2plbjf.css';
import '../../css/r/r7e936b3o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG24aNScsn"><g class="aql7dnt-u"><path class="syw2plbjf"/><path class="r7e936b3o"/></g></mask></defs><path mask="url(#SVG24aNScsn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bottle-one",
	});
}

export default Component;
