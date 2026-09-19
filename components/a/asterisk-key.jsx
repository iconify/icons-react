import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/m/m94082b8o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGR7hQ3c4V"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="m94082b8o"/></g></mask></defs><path mask="url(#SVGR7hQ3c4V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:asterisk-key",
	});
}

export default Component;
