import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o0h2j8b2i.css';
import '../../css/g/g-kcfqbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o0h2j8b2i"/><path class="g-kcfqbux"/></g>`,
		"fallback": "streamline-ultimate:check-square",
	});
}

export default Component;
