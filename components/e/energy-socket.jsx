import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dc3vmxbte.css';
import '../../css/z/zuys3d6ca.css';
import '../../css/i/iaiylo83l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1egiIr9g"><g class="aql7dnt-u"><path class="dc3vmxbte"/><path class="zuys3d6ca"/><path class="iaiylo83l"/></g></mask></defs><path mask="url(#SVG1egiIr9g)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:energy-socket",
	});
}

export default Component;
