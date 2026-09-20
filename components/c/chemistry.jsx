import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bqxttkbby.css';
import '../../css/y/yst-0q3dc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="bqxttkbby"/><path class="yst-0q3dc"/></g>`,
		"fallback": "marketeq:chemistry",
	});
}

export default Component;
