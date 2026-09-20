import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldx3nnbdl.css';
import '../../css/r/rfq943bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ldx3nnbdl"/><path class="rfq943bqv"/></g>`,
		"fallback": "streamline-ultimate:design-tool-ink",
	});
}

export default Component;
