import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbfmji0-x.css';
import '../../css/t/ttexwac3y.css';
import '../../css/e/efdc1gb8g.css';
import '../../css/b/bp87d8bgl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbfmji0-x"/><path clip-rule="evenodd" class="ttexwac3y"/><path class="efdc1gb8g"/><path clip-rule="evenodd" class="bp87d8bgl"/></g>`,
		"fallback": "glyphs:building-outline",
	});
}

export default Component;
