import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lcee_744z.css';
import '../../css/q/quqne-byv.css';
import '../../css/k/kj14aabfk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6Wwnyc8I"><g class="aql7dnt-u"><path class="lcee_744z"/><path class="quqne-byv"/><path class="kj14aabfk"/></g></mask></defs><path mask="url(#SVG6Wwnyc8I)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:database-alert",
	});
}

export default Component;
