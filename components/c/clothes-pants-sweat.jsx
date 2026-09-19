import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/olbdy62vw.css';
import '../../css/a/adkgjib1p.css';
import '../../css/n/n6zdtvbbl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDIodFe2x"><g class="aql7dnt-u"><path class="olbdy62vw"/><path class="adkgjib1p"/><path class="n6zdtvbbl"/></g></mask></defs><path mask="url(#SVGDIodFe2x)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-pants-sweat",
	});
}

export default Component;
