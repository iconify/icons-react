import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z6rw4csib.css';
import '../../css/d/d9g2_3_7w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z6rw4csib"/><path class="d9g2_3_7w"/></g>`,
		"fallback": "streamline-flex:elevator",
	});
}

export default Component;
