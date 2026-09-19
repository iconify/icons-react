import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/ddmw1lqul.css';
import '../../css/i/iq3trbbun.css';
import '../../css/h/h12wcpb0y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkEsF4YrA"><g class="rohhhzb0l"><path class="ddmw1lqul"/><path class="iq3trbbun"/><path class="h12wcpb0y"/></g></mask></defs><path mask="url(#SVGkEsF4YrA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:eggplant",
	});
}

export default Component;
