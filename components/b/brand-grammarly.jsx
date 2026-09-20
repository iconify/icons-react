import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/f/f8f8jgbbx.css';
import '../../css/a/abdcnfbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="f8f8jgbbx"/><path class="abdcnfbbo"/></g>`,
		"fallback": "tabler:brand-grammarly",
	});
}

export default Component;
