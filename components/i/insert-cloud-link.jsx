import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lz_-0e4ls.css';
import '../../css/t/t0qa7ybty.css';
import '../../css/o/o9v5-fb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lz_-0e4ls"/><path class="t0qa7ybty"/><path class="o9v5-fb2d"/></g>`,
		"fallback": "streamline-sharp-color:insert-cloud-link",
	});
}

export default Component;
