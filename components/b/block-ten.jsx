import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/d/d70u10bbk.css';
import '../../css/d/dov8vg2gk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIngd6caS"><g class="adexpl72i"><path class="d70u10bbk"/><path class="dov8vg2gk"/></g></mask></defs><path mask="url(#SVGIngd6caS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-ten",
	});
}

export default Component;
