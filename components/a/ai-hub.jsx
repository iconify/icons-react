import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3tndbi8s.css';
import '../../css/c/c_mmhvb1x.css';
import '../../css/y/y7c7ewbme.css';
import '../../css/h/hv9o9blfl.css';
import '../../css/f/fbvvimb_u.css';
import '../../css/w/w-co-3eor.css';
import '../../css/x/x9uztabov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3tndbi8s"/><path class="c_mmhvb1x"/><path class="y7c7ewbme"/><path class="hv9o9blfl"/><path class="fbvvimb_u"/><path class="w-co-3eor"/><path class="x9uztabov"/>`,
		"fallback": "gcp:ai-hub",
	});
}

export default Component;
