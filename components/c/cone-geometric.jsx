import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vsetlmnfd.css';
import '../../css/w/w-nzf7bmp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vsetlmnfd"/><path class="w-nzf7bmp"/></g>`,
		"fallback": "marketeq:cone-geometric",
	});
}

export default Component;
