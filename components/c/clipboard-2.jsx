import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghuv7u2ge.css';
import '../../css/p/p2ozvkboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ghuv7u2ge"/><path class="p2ozvkboy"/></g>`,
		"fallback": "mage:clipboard-2",
	});
}

export default Component;
