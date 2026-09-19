import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe65lpnwd.css';
import '../../css/x/xjxgb8bzs.css';
import '../../css/x/xza70ebax.css';
import '../../css/e/eouatib8t.css';
import '../../css/l/llsdk8b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fe65lpnwd"/><path class="xjxgb8bzs"/><path class="xza70ebax"/><path class="eouatib8t"/><path class="llsdk8b1z"/>`,
		"fallback": "bx:bxl-react",
	});
}

export default Component;
