import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_ete1bey.css';
import '../../css/h/honiwlhsg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2c9QBder"><g class="aql7dnt-u"><circle class="a_ete1bey"/><path class="honiwlhsg"/></g></mask></defs><path mask="url(#SVG2c9QBder)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handle-square",
	});
}

export default Component;
