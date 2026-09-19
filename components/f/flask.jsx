import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/v0d3qdbyt.css';
import '../../css/l/l5z1kmb-d.css';
import '../../css/s/s4hc70mva.css';
import '../../css/r/rkdj0cboh.css';
import '../../css/e/eles-vb5f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="v0d3qdbyt"/><path class="l5z1kmb-d"/><path class="s4hc70mva"/><path class="rkdj0cboh"/><path class="eles-vb5f"/></g>`,
		"fallback": "icon-park:flask",
	});
}

export default Component;
