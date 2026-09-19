import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dq9x4xjot.css';
import '../../css/s/sm85w8b7f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2wgVdbzN"><g class="v3_i3wktz"><path class="dq9x4xjot"/><path clip-rule="evenodd" class="sm85w8b7f"/></g></mask></defs><path mask="url(#SVG2wgVdbzN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hand-down",
	});
}

export default Component;
