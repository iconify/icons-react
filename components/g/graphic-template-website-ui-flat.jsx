import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tzmolab6c.css';
import '../../css/f/fjys73b2m.css';
import '../../css/r/rir011h_h.css';
import '../../css/d/duaxodl1g.css';
import '../../css/j/j4i41sbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tzmolab6c"/><path clip-rule="evenodd" class="fjys73b2m"/><path class="rir011h_h"/><path clip-rule="evenodd" class="duaxodl1g"/><path clip-rule="evenodd" class="j4i41sbbm"/></g>`,
		"fallback": "streamline-sharp-color:graphic-template-website-ui-flat",
	});
}

export default Component;
