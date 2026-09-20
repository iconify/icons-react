import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zgfbb2z5b.css';
import '../../css/q/quydibcdy.css';
import '../../css/y/y4yzqgbhi.css';
import '../../css/k/kx0jl-bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zgfbb2z5b"/><path class="quydibcdy"/><path class="y4yzqgbhi"/><path class="kx0jl-bjg"/></g>`,
		"fallback": "reicon:card-edit",
	});
}

export default Component;
