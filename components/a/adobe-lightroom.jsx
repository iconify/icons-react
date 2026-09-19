import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/f/fa82g9big.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNszwmciv"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="fa82g9big"/></g></mask></defs><path mask="url(#SVGNszwmciv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:adobe-lightroom",
	});
}

export default Component;
