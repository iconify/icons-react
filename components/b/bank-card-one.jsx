import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/t366rs_zx.css';
import '../../css/y/y69zqwb9i.css';
import '../../css/x/xma6_zbrt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoDmWQbYk"><g class="aql7dnt-u"><path class="t366rs_zx"/><rect class="y69zqwb9i"/><path class="xma6_zbrt"/></g></mask></defs><path mask="url(#SVGoDmWQbYk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bank-card-one",
	});
}

export default Component;
