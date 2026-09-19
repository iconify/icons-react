import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/i/igjrdzbaq.css';
import '../../css/d/de7dm8bxh.css';
import '../../css/x/xvy4agd9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="igjrdzbaq"/><path class="de7dm8bxh"/><path class="xvy4agd9u"/></g>`,
		"fallback": "icon-park-outline:beer",
	});
}

export default Component;
