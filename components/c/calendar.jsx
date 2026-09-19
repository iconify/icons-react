import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dv-67s2rc.css';
import '../../css/s/sxmwz_82x.css';
import '../../css/m/mdlrplbcn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG36y0sc2l"><g class="v3_i3wktz"><path class="dv-67s2rc"/><path class="sxmwz_82x"/><path class="mdlrplbcn"/></g></mask></defs><path mask="url(#SVG36y0sc2l)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:calendar",
	});
}

export default Component;
