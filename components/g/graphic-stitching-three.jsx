import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mho5o29zz.css';
import '../../css/c/cx-drzi7n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhevevcOk"><g class="aql7dnt-u"><path class="mho5o29zz"/><path class="cx-drzi7n"/></g></mask></defs><path mask="url(#SVGhevevcOk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:graphic-stitching-three",
	});
}

export default Component;
