import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z1o7okxvx.css';
import '../../css/i/isqxqcc9p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsNjStRVO"><g class="aql7dnt-u"><path class="z1o7okxvx"/><path class="isqxqcc9p"/></g></mask></defs><path mask="url(#SVGsNjStRVO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:breast-pump",
	});
}

export default Component;
