import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0o962bep.css';
import '../../css/t/tfojvx0de.css';
import '../../css/b/bzvy1kbvb.css';
import '../../css/k/kzmcnwrsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p0o962bep"/><path class="tfojvx0de"/><path class="bzvy1kbvb"/><path class="kzmcnwrsf"/></g>`,
		"fallback": "streamline-cyber-color:download-2",
	});
}

export default Component;
