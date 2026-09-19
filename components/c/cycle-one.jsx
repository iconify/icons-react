import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ofdb5_b4q.css';
import '../../css/y/ypirux6wu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQGgVpcIm"><g class="aql7dnt-u"><path class="ofdb5_b4q"/><path class="ypirux6wu"/></g></mask></defs><path mask="url(#SVGQGgVpcIm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cycle-one",
	});
}

export default Component;
