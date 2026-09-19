import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/o/obtq3bw8r.css';
import '../../css/t/th81deifi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGByKIDebf"><g class="adexpl72i"><path clip-rule="evenodd" class="obtq3bw8r"/><path class="th81deifi"/></g></mask></defs><path mask="url(#SVGByKIDebf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circle-four",
	});
}

export default Component;
