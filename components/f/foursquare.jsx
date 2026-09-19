import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l9hcfvb2t.css';
import '../../css/u/uqe17tcka.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnxiyGcFt"><g class="aql7dnt-u"><path class="l9hcfvb2t"/><path class="uqe17tcka"/></g></mask></defs><path mask="url(#SVGnxiyGcFt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:foursquare",
	});
}

export default Component;
