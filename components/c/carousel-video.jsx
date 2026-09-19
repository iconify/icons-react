import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/llpmbrbgw.css';
import '../../css/g/g0ufjysom.css';
import '../../css/r/rkquw6meg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuJOGTtAE"><g class="aql7dnt-u"><path class="llpmbrbgw"/><path class="g0ufjysom"/><path class="rkquw6meg"/></g></mask></defs><path mask="url(#SVGuJOGTtAE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:carousel-video",
	});
}

export default Component;
