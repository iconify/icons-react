import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/omztqcrvs.css';
import '../../css/j/jlgpy20cj.css';
import '../../css/e/eoehlug1a.css';
import '../../css/k/k2qf7syyc.css';
import '../../css/w/weu-k5bgx.css';
import '../../css/u/u-bxkwb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="omztqcrvs wm-shadow"/><path class="jlgpy20cj"/><path class="eoehlug1a"/><path class="k2qf7syyc"/><path class="weu-k5bgx"/><path class="u-bxkwb6w"/></g>`,
		"fallback": "withicons-retro:bone",
	});
}

export default Component;
