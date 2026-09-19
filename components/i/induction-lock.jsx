import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zdr2iabse.css';
import '../../css/x/xsw5b7b3e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsQQEweKb"><g class="aql7dnt-u"><path class="zdr2iabse"/><path class="xsw5b7b3e"/></g></mask></defs><path mask="url(#SVGsQQEweKb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:induction-lock",
	});
}

export default Component;
