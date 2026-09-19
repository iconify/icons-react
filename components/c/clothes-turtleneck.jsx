import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bxqc1kmci.css';
import '../../css/b/b-me-lb3d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOeamjdsF"><g class="aql7dnt-u"><path class="bxqc1kmci"/><path class="b-me-lb3d"/></g></mask></defs><path mask="url(#SVGOeamjdsF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-turtleneck",
	});
}

export default Component;
