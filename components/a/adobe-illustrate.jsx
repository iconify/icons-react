import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/e/ezjw4-bqt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlbLTWdGd"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="ezjw4-bqt"/></g></mask></defs><path mask="url(#SVGlbLTWdGd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:adobe-illustrate",
	});
}

export default Component;
