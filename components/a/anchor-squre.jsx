import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/d/dhsxfubbd.css';
import '../../css/j/j0kr4gbdb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGceNkEezh"><g class="aql7dnt-u"><path class="e9bm3i9jh"/><circle class="dhsxfubbd"/><path class="j0kr4gbdb"/></g></mask></defs><path mask="url(#SVGceNkEezh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:anchor-squre",
	});
}

export default Component;
