import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/i/igjrdzbaq.css';
import '../../css/o/o9fsfkr9z.css';
import '../../css/x/xvy4agd9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="igjrdzbaq"/><path class="o9fsfkr9z"/><path class="xvy4agd9u"/></g>`,
		"fallback": "icon-park-solid:beer",
	});
}

export default Component;
