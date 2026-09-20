import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zvlx5pb-z.css';
import '../../css/f/fksoxnoox.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="zvlx5pb-z"/><path class="fksoxnoox"/></g>`,
		"fallback": "marketeq:clock-alt",
	});
}

export default Component;
