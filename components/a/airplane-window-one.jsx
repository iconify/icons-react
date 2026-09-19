import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r7y9s5_0e.css';
import '../../css/s/s4l2tj3qm.css';
import '../../css/r/r7crm2osv.css';
import '../../css/s/sw9l2ebuz.css';
import '../../css/g/g_ewu02wb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZvPOqd7H"><g class="v3_i3wktz"><path class="r7y9s5_0e"/><path class="s4l2tj3qm"/><path class="r7crm2osv"/><rect class="sw9l2ebuz"/><path class="g_ewu02wb"/></g></mask></defs><path mask="url(#SVGZvPOqd7H)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:airplane-window-one",
	});
}

export default Component;
