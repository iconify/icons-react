import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r769j7b0q.css';
import '../../css/m/mm4kkrtjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r769j7b0q"/><path class="mm4kkrtjd"/></g>`,
		"fallback": "coolicons:currency-yen-duocolor-round",
	});
}

export default Component;
