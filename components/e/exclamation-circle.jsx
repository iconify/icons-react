import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obzksubap.css';
import '../../css/n/ndhxy8pex.css';
import '../../css/b/blufi__hz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="obzksubap"/><path class="ndhxy8pex"/><path class="blufi__hz"/></g>`,
		"fallback": "glyphs-poly:exclamation-circle",
	});
}

export default Component;
