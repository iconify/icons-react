import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jl2_3mbva.css';
import '../../css/n/n02s8jmgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jl2_3mbva"/><path class="n02s8jmgt"/></g>`,
		"fallback": "icon-park-outline:github",
	});
}

export default Component;
