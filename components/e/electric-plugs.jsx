import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cty8jqbcu.css';
import '../../css/g/g5tny-ymz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cty8jqbcu"/><path class="g5tny-ymz"/></g>`,
		"fallback": "hugeicons:electric-plugs",
	});
}

export default Component;
