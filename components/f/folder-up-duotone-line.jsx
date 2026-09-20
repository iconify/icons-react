import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohybma0or.css';
import '../../css/b/bjy0nab2j.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjAxQ6d1c"><g class="ft5dv1b6b"><path class="ohybma0or"/><path class="bjy0nab2j"/></g></mask></defs><path mask="url(#SVGjAxQ6d1c)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-up-duotone-line",
	});
}

export default Component;
