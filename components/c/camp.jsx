import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xltgi6s1j.css';
import '../../css/b/b78x01bex.css';
import '../../css/o/of8nq_0fv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWEwWWb5S"><g class="aql7dnt-u"><path class="xltgi6s1j"/><path class="b78x01bex"/><path class="of8nq_0fv"/></g></mask></defs><path mask="url(#SVGWEwWWb5S)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:camp",
	});
}

export default Component;
