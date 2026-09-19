import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl5jgnb6c.css';
import '../../css/k/kdxmgm20z.css';
import '../../css/g/gos470f8k.css';
import '../../css/n/n1xy6nh9u.css';
import '../../css/n/nwrnq1tnm.css';
import '../../css/i/ig2_59b5g.css';
import '../../css/l/l97nb-quh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tl5jgnb6c"/><circle class="kdxmgm20z"/><circle class="gos470f8k"/><circle class="n1xy6nh9u"/><circle class="nwrnq1tnm"/><circle class="ig2_59b5g"/><circle class="l97nb-quh"/>`,
		"fallback": "bx:bx-dialpad-alt",
	});
}

export default Component;
