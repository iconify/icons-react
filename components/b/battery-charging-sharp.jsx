import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7q87o6mu.css';
import '../../css/m/mnrm0dbsd.css';
import '../../css/d/dir4mc3_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7q87o6mu"/><path class="mnrm0dbsd"/><path class="dir4mc3_p"/>`,
		"fallback": "famicons:battery-charging-sharp",
	});
}

export default Component;
