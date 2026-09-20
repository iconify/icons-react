import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6i16ds0i.css';
import '../../css/j/jptd4uorv.css';
import '../../css/n/nnas63vml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="r6i16ds0i"/><path class="jptd4uorv"/><path class="nnas63vml"/></g>`,
		"fallback": "majesticons:globe-earth",
	});
}

export default Component;
