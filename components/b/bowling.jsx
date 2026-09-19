import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz0cnorym.css';
import '../../css/p/pu7gjm5be.css';
import '../../css/g/gcbpa1m7u.css';
import '../../css/p/p5a3kabtg.css';
import '../../css/f/fkja9wbhy.css';
import '../../css/v/vzsm7w_eg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz0cnorym"/><path class="pu7gjm5be"/><circle class="gcbpa1m7u"/><path class="p5a3kabtg"/><path class="fkja9wbhy"/><path class="vzsm7w_eg"/>`,
		"fallback": "fxemoji:bowling",
	});
}

export default Component;
