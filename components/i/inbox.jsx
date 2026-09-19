import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x_ct48b7d.css';
import '../../css/x/xt05grelv.css';
import '../../css/j/jqna_5nqw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTAqdHcnF"><g class="v3_i3wktz"><path class="x_ct48b7d"/><path class="xt05grelv"/><path class="jqna_5nqw"/></g></mask></defs><path mask="url(#SVGTAqdHcnF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:inbox",
	});
}

export default Component;
