import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v3cnr-b5h.css';
import '../../css/n/nhvy4t0re.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v3cnr-b5h"/><path class="nhvy4t0re"/></g>`,
		"fallback": "glyphs:hand",
	});
}

export default Component;
