import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wsbzt7bwh.css';
import '../../css/u/u5n78mb4p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6Pg9PcBN"><g class="v3_i3wktz"><path class="wsbzt7bwh"/><path class="u5n78mb4p"/></g></mask></defs><path mask="url(#SVG6Pg9PcBN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flip-horizontally",
	});
}

export default Component;
