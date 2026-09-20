import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kyqzo4bmf.css';
import '../../css/o/ojcediwcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kyqzo4bmf"/><path class="ojcediwcu"/></g>`,
		"fallback": "streamline-logos:affinity-designer-logo",
	});
}

export default Component;
