import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/ll720cc5b.css';
import '../../css/x/x78giw_pp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGogKucdpE"><g class="aql7dnt-u"><rect class="ll720cc5b"/><path class="x78giw_pp"/></g></mask></defs><path mask="url(#SVGogKucdpE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-sheet",
	});
}

export default Component;
