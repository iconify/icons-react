import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6srddc_x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkvkc1cLV"><path class="d6srddc_x"/></mask></defs><path mask="url(#SVGkvkc1cLV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:game-emoji",
	});
}

export default Component;
