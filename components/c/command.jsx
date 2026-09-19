import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pmn-s_e-h.css';
import '../../css/w/wuekglbtb.css';
import '../../css/j/jid1799ri.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGH2yzYimC"><g class="v3_i3wktz"><path class="pmn-s_e-h"/><path class="wuekglbtb"/><path class="jid1799ri"/></g></mask></defs><path mask="url(#SVGH2yzYimC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:command",
	});
}

export default Component;
