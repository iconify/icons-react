import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/ho2pnibko.css';
import '../../css/a/apvo4cjdv.css';
import '../../css/d/dpz15i3hu.css';
import '../../css/p/pee0w9b0l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGrTTwec2P"><g class="rohhhzb0l"><path class="ho2pnibko"/><path class="apvo4cjdv"/><rect class="dpz15i3hu"/><circle class="pee0w9b0l"/></g></mask></defs><path mask="url(#SVGrTTwec2P)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baseball-cap",
	});
}

export default Component;
