import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t-9zdjz2j.css';
import '../../css/c/cj82m3bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t-9zdjz2j"/><path class="cj82m3bie"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-02",
	});
}

export default Component;
