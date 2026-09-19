import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7yvrsswf.css';
import '../../css/t/t8radzbpg.css';
import '../../css/w/wmkeibccw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7yvrsswf"/><path class="t8radzbpg"/><path class="wmkeibccw"/>`,
		"fallback": "ant-design:flag-twotone",
	});
}

export default Component;
