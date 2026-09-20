import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/ca9vtgb1k.css';
import '../../css/b/bjuwydbpd.css';
import '../../css/k/k06y8zcgv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ca9vtgb1k"/><path class="bjuwydbpd"/><path class="k06y8zcgv"/></g>`,
		"fallback": "streamline-plump-color:escalator-up",
	});
}

export default Component;
