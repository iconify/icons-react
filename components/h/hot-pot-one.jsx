import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/l/lrhbazbif.css';
import '../../css/q/qjunyybpn.css';
import '../../css/j/jq3ltpbcw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEGHG9w6m"><g class="hv130ab-t"><path class="lrhbazbif"/><path class="qjunyybpn"/><path class="jq3ltpbcw"/></g></mask></defs><path mask="url(#SVGEGHG9w6m)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hot-pot-one",
	});
}

export default Component;
