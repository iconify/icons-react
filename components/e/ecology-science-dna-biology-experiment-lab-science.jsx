import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s7_vqqb7b.css';
import '../../css/w/w61q9hymn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s7_vqqb7b"/><path class="w61q9hymn"/></g>`,
		"fallback": "streamline:ecology-science-dna-biology-experiment-lab-science",
	});
}

export default Component;
