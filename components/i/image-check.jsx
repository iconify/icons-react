import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r2qplccuz.css';
import '../../css/h/h-m8eqbos.css';
import '../../css/i/icf0rgbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r2qplccuz"/><path clip-rule="evenodd" class="h-m8eqbos"/><path class="icf0rgbji"/></g>`,
		"fallback": "reicon:image-check",
	});
}

export default Component;
