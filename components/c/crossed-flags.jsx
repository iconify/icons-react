import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rfuc61brw.css';
import '../../css/n/n11ce4bqb.css';
import '../../css/d/dx94qtbnl.css';
import '../../css/d/dtv4i4xpv.css';
import '../../css/t/tt3bc10st.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rfuc61brw"/><path class="n11ce4bqb"/><path class="dx94qtbnl"/><path class="dtv4i4xpv"/><path class="tt3bc10st"/></g>`,
		"fallback": "fluent-emoji-flat:crossed-flags",
	});
}

export default Component;
