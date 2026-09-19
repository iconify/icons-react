import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/enw8ysjww.css';
import '../../css/a/aou6uxbpc.css';
import '../../css/l/lkb7etlcq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWe0BFeAC"><g class="v3_i3wktz"><path class="enw8ysjww"/><path class="aou6uxbpc"/><path class="lkb7etlcq"/></g></mask></defs><path mask="url(#SVGWe0BFeAC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:connection-point",
	});
}

export default Component;
