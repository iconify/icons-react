import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/axrtmvakb.css';
import '../../css/s/s5d4nebov.css';
import '../../css/k/kmti6wb1i.css';
import '../../css/p/pgqe0btlt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="axrtmvakb"/><path class="s5d4nebov"/><path class="kmti6wb1i"/><path class="pgqe0btlt"/></g>`,
		"fallback": "streamline-plump-color:diamond-1",
	});
}

export default Component;
