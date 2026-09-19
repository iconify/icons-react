import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cqbv7ifuy.css';
import '../../css/o/ov4pfgbpj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cqbv7ifuy"/><path class="ov4pfgbpj"/></g>`,
		"fallback": "devicon-plain:cakephp-wordmark",
	});
}

export default Component;
