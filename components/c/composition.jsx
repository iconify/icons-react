import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gkbo53bao.css';
import '../../css/j/jd6nm6b1y.css';
import '../../css/v/vwl3tqb1n.css';
import '../../css/d/dhjh0zb6s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaYcmNdPN"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="gkbo53bao"/><path class="jd6nm6b1y"/><path class="vwl3tqb1n"/><path class="dhjh0zb6s"/></g></mask></defs><path mask="url(#SVGaYcmNdPN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:composition",
	});
}

export default Component;
