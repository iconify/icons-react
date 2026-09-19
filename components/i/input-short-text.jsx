import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/avstzqbmj.css';
import '../../css/j/jh2awfzci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="avstzqbmj"/><path class="jh2awfzci"/></g>`,
		"fallback": "hugeicons:input-short-text",
	});
}

export default Component;
