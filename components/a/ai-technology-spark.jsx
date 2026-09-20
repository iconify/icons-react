import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0e42sdas.css';
import '../../css/g/goe_-5btt.css';
import '../../css/n/n9d86wlpu.css';
import '../../css/j/jf-o-sfic.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r0e42sdas"/><path class="goe_-5btt"/><path class="n9d86wlpu"/><path class="jf-o-sfic"/></g>`,
		"fallback": "streamline-color:ai-technology-spark",
	});
}

export default Component;
