import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ukuledbip.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/d/du3ld4bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ukuledbip"/><path class="j7qjn6psg"/><path class="du3ld4bbn"/></g>`,
		"fallback": "tabler:brand-filezilla",
	});
}

export default Component;
