import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/noh310a9s.css';
import '../../css/u/uok4w2qih.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwtf1lbsB"><g class="aql7dnt-u"><path class="noh310a9s"/><path class="uok4w2qih"/></g></mask></defs><path mask="url(#SVGwtf1lbsB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diamond-necklace",
	});
}

export default Component;
