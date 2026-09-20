import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jclmzmbsl.css';
import '../../css/z/z2fgy-3re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jclmzmbsl"/><path class="z2fgy-3re"/></g>`,
		"fallback": "mage:calculator",
	});
}

export default Component;
