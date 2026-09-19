import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sla-trbaw.css';
import '../../css/y/y56puac6x.css';
import '../../css/d/dmkk9tbyk.css';
import '../../css/a/auejspbti.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sla-trbaw"/><path class="y56puac6x"/><path class="dmkk9tbyk"/><path class="auejspbti"/></g>`,
		"fallback": "glyphs:camera-outline",
	});
}

export default Component;
