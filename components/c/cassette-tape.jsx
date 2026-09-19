import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kashf7dvo.css';
import '../../css/g/gnfp7qbrp.css';
import '../../css/v/vlfpssodi.css';
import '../../css/z/z4p6v5jwg.css';
import '../../css/f/foe06fc_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kashf7dvo"/><path class="gnfp7qbrp"/><circle class="vlfpssodi"/><circle class="z4p6v5jwg"/><path class="foe06fc_a"/></g>`,
		"fallback": "hugeicons:cassette-tape",
	});
}

export default Component;
