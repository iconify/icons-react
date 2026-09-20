import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jeg3zq4og.css';
import '../../css/h/hxyvl_b8f.css';
import '../../css/x/x1r3-hbsx.css';
import '../../css/x/x-go-tinw.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jeg3zq4og"/><path clip-rule="evenodd" class="hxyvl_b8f"/><path class="x1r3-hbsx"/><path class="x-go-tinw"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:bluetooth-circle",
	});
}

export default Component;
