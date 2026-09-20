import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/iyk7u5oma.css';
import '../../css/f/fkqzsccak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="iyk7u5oma"/><path class="fkqzsccak"/></g>`,
		"fallback": "reicon:document-text",
	});
}

export default Component;
