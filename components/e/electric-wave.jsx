import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/b/bhn8txt5s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvXj4Mc8N"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="bhn8txt5s"/></g></mask></defs><path mask="url(#SVGvXj4Mc8N)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:electric-wave",
	});
}

export default Component;
