import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/rbkt40igj.css';
import '../../css/r/r_ciqfbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="rbkt40igj"/><path class="r_ciqfbak"/></g>`,
		"fallback": "streamline-sharp-color:battery-empty-2",
	});
}

export default Component;
