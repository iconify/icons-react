import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/o/ob5x3zuiv.css';
import '../../css/b/bacrhyx6o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIgOVqbso"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="ob5x3zuiv"/><path clip-rule="evenodd" class="bacrhyx6o"/></g></mask></defs><path mask="url(#SVGIgOVqbso)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:adobe-indesign",
	});
}

export default Component;
