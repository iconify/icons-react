import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nakq96r0e.css';
import '../../css/b/by6efw6xw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGH7E6acBD"><g class="v3_i3wktz"><path class="nakq96r0e"/><path class="by6efw6xw"/></g></mask></defs><path mask="url(#SVGH7E6acBD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:commodity",
	});
}

export default Component;
