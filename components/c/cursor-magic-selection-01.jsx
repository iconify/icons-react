import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8lupqbuz.css';
import '../../css/s/sx2dysfpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s8lupqbuz"/><path class="sx2dysfpg"/></g>`,
		"fallback": "hugeicons:cursor-magic-selection-01",
	});
}

export default Component;
