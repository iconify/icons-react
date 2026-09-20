import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/s/syw2rdbdu.css';
import '../../css/m/mnw8fwi5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="syw2rdbdu"/><path class="mnw8fwi5u"/></g>`,
		"fallback": "reicon:document-code2",
	});
}

export default Component;
