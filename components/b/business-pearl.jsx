import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t5wd5f95q.css';
import '../../css/a/ag3zrhbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t5wd5f95q"/><path class="ag3zrhbtg"/></g>`,
		"fallback": "streamline-ultimate:business-pearl",
	});
}

export default Component;
