import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvu7hs4ct.css';
import '../../css/q/q8_vazstx.css';
import '../../css/p/p4m49acib.css';

const viewBox = {"width":330,"height":323};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvu7hs4ct"/><path class="q8_vazstx"/><path class="p4m49acib"/>`,
		"fallback": "thesvg-color:farsiui",
	});
}

export default Component;
