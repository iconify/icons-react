import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4ds8eb0k.css';
import '../../css/n/nw50z4aaf.css';
import '../../css/k/k0i7g7b7j.css';
import '../../css/t/t520i4bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m4ds8eb0k"/><path class="nw50z4aaf"/><path class="k0i7g7b7j"/><path clip-rule="evenodd" class="t520i4bft"/></g>`,
		"fallback": "reicon:bug-duotone",
	});
}

export default Component;
