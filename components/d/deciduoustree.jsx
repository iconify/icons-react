import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6yn8gb3f.css';
import '../../css/i/ipg66nb4h.css';
import '../../css/s/syqz6bc1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6yn8gb3f"/><path class="ipg66nb4h"/><path class="syqz6bc1j"/>`,
		"fallback": "fxemoji:deciduoustree",
	});
}

export default Component;
