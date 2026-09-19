import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/m-w6wgbel.css';
import '../../css/n/nw__d7bfz.css';
import '../../css/l/l2x9dv0pz.css';
import '../../css/p/p-zuy-bhv.css';
import '../../css/i/ib55f4h-l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQRNJheTT"><g class="rohhhzb0l"><path class="m-w6wgbel"/><circle class="nw__d7bfz"/><path class="l2x9dv0pz"/><path class="p-zuy-bhv"/><path class="ib55f4h-l"/></g></mask></defs><path mask="url(#SVGQRNJheTT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby-mobile",
	});
}

export default Component;
