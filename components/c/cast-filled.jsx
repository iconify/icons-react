import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sthnq_bas.css';
import '../../css/k/k0rk_ubdy.css';
import '../../css/l/ljyzvbntq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sthnq_bas"/><path class="k0rk_ubdy"/><path class="ljyzvbntq"/>`,
		"fallback": "lucide-extended:cast-filled",
	});
}

export default Component;
