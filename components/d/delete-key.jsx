import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v07ydtbdh.css';
import '../../css/k/ks_btesko.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6CAphd8j"><g class="aql7dnt-u"><path class="v07ydtbdh"/><path class="ks_btesko"/></g></mask></defs><path mask="url(#SVG6CAphd8j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:delete-key",
	});
}

export default Component;
