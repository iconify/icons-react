import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sv88ewnzg.css';
import '../../css/b/bfsv7cc4c.css';
import '../../css/s/sma5kmzjd.css';
import '../../css/x/xo9chq19z.css';
import '../../css/r/r419udbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sv88ewnzg"/><path class="bfsv7cc4c"/><path class="sma5kmzjd"/><circle class="xo9chq19z"/><path class="r419udbep"/></g>`,
		"fallback": "solar:columns-3-cog-linear",
	});
}

export default Component;
