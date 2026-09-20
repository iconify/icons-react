import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqdps7hvt.css';
import '../../css/x/xvpm0wbmd.css';
import '../../css/b/bivz2wbdu.css';
import '../../css/e/euyl8dt7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqdps7hvt"/><path class="xvpm0wbmd"/><path class="bivz2wbdu"/><path clip-rule="evenodd" class="euyl8dt7f"/></g>`,
		"fallback": "keyline-icons:door-open-duotone",
	});
}

export default Component;
