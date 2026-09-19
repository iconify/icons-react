import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j_frwf33v.css';
import '../../css/g/gnr850uhy.css';
import '../../css/h/hl1e5tbjq.css';
import '../../css/a/a-2hqx3ud.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGv1fFy7IO"><g class="aql7dnt-u"><rect class="j_frwf33v"/><path class="gnr850uhy"/><path clip-rule="evenodd" class="hl1e5tbjq"/><path class="a-2hqx3ud"/></g></mask></defs><path mask="url(#SVGv1fFy7IO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:calendar-thirty",
	});
}

export default Component;
