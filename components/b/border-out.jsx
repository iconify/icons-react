import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6ret3bta.css';
import '../../css/k/k1zg5jbzp.css';
import '../../css/s/sx_d_nlnk.css';
import '../../css/f/fc-nxccwx.css';
import '../../css/d/dq7yppiaz.css';
import '../../css/k/kr-tsdrut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6ret3bta"/><circle class="k1zg5jbzp"/><circle class="sx_d_nlnk"/><circle class="fc-nxccwx"/><circle class="dq7yppiaz"/><circle class="kr-tsdrut"/>`,
		"fallback": "uim:border-out",
	});
}

export default Component;
