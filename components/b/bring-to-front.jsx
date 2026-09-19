import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/y-0f4nbla.css';
import '../../css/q/qy-xuybra.css';
import '../../css/h/hk92wwirk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuhemE7Xx"><g class="rohhhzb0l"><path class="y-0f4nbla"/><path class="qy-xuybra"/><path class="hk92wwirk"/></g></mask></defs><path mask="url(#SVGuhemE7Xx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bring-to-front",
	});
}

export default Component;
