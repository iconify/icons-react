import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pymb-abua.css';
import '../../css/r/r1etijbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pymb-abua"/><path class="r1etijbft"/></g>`,
		"fallback": "mage:gem-a",
	});
}

export default Component;
