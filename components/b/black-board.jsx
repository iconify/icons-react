import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/s8dkgdbrc.css';
import '../../css/b/bgy3u5m7y.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="s8dkgdbrc"/><path class="bgy3u5m7y"/></g>`,
		"fallback": "marketeq:black-board",
	});
}

export default Component;
