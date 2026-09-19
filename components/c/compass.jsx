import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/baen2yhxr.css';
import '../../css/g/g54p95bma.css';
import '../../css/n/neptv8bgx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtEp7Ce7g"><g class="aql7dnt-u"><path class="baen2yhxr"/><circle class="g54p95bma"/><path class="neptv8bgx"/></g></mask></defs><path mask="url(#SVGtEp7Ce7g)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:compass",
	});
}

export default Component;
