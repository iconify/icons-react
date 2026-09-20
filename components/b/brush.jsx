import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/elm65w5ld.css';
import '../../css/s/ssbrkmrft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="elm65w5ld"/><path class="ssbrkmrft"/></g>`,
		"fallback": "reicon:brush",
	});
}

export default Component;
