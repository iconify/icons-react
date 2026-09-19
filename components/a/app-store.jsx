import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/z/zu0gdeclu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGww5Pbcfx"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="zu0gdeclu"/></g></mask></defs><path mask="url(#SVGww5Pbcfx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:app-store",
	});
}

export default Component;
