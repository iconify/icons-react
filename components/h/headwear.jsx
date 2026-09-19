import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c5-ywabzd.css';
import '../../css/h/h1wg54yab.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG161rPeGv"><g class="aql7dnt-u"><path class="c5-ywabzd"/><path class="h1wg54yab"/></g></mask></defs><path mask="url(#SVG161rPeGv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:headwear",
	});
}

export default Component;
