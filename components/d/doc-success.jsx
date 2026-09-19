import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g2jmimp0p.css';
import '../../css/g/gt63qzonx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKyLBZc7Q"><g class="aql7dnt-u"><path class="g2jmimp0p"/><path class="gt63qzonx"/></g></mask></defs><path mask="url(#SVGKyLBZc7Q)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:doc-success",
	});
}

export default Component;
