import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekh-ymbqu.css';
import '../../css/k/k27hiquiw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekh-ymbqu"/><path class="k27hiquiw"/>`,
		"fallback": "ion:duplicate-sharp",
	});
}

export default Component;
