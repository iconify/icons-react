import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/v5085omnf.css';
import '../../css/w/wsbzt7bwh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkwAIXlKx"><g class="v3_i3wktz"><path class="v5085omnf"/><path class="wsbzt7bwh"/></g></mask></defs><path mask="url(#SVGkwAIXlKx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-horizontally",
	});
}

export default Component;
