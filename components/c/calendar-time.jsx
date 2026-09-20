import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v2rwe_1tf.css';
import '../../css/o/oe0hep0lg.css';
import '../../css/s/s9jhijksu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v2rwe_1tf"/><path class="oe0hep0lg"/><path class="s9jhijksu"/></g>`,
		"fallback": "tabler:calendar-time",
	});
}

export default Component;
