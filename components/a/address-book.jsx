import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vdpoyrbwh.css';
import '../../css/q/qhznpibnr.css';
import '../../css/i/iru-mbbdf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGb4Tpbbh"><g class="aql7dnt-u"><path class="vdpoyrbwh"/><circle class="qhznpibnr"/><path class="iru-mbbdf"/></g></mask></defs><path mask="url(#SVGGb4Tpbbh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:address-book",
	});
}

export default Component;
