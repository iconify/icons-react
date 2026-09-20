import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/ray-gguex.css';
import '../../css/s/sghaxdbcl.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ray-gguex"/><path class="sghaxdbcl"/></g>`,
		"fallback": "marketeq:download-alt-4",
	});
}

export default Component;
