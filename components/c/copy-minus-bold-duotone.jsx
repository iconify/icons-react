import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtplmt03a.css';
import '../../css/g/gt-p5sx5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtplmt03a"/><path clip-rule="evenodd" class="gt-p5sx5s"/>`,
		"fallback": "solar:copy-minus-bold-duotone",
	});
}

export default Component;
