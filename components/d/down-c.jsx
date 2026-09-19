import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/t/thxn9_4aw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9amKGc8o"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="thxn9_4aw"/></g></mask></defs><path mask="url(#SVG9amKGc8o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:down-c",
	});
}

export default Component;
