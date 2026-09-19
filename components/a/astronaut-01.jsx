import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n72rw4b2e.css';
import '../../css/p/p70horb1t.css';
import '../../css/p/pojivdb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="n72rw4b2e"/><path class="p70horb1t"/><path class="pojivdb0a"/></g>`,
		"fallback": "hugeicons:astronaut-01",
	});
}

export default Component;
