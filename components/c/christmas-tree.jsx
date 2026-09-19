import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r39fblbgi.css';
import '../../css/c/cazgsbbek.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFBEg4dkG"><g class="aql7dnt-u"><path class="r39fblbgi"/><path class="cazgsbbek"/></g></mask></defs><path mask="url(#SVGFBEg4dkG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:christmas-tree",
	});
}

export default Component;
