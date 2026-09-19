import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/t/tyso1hb3g.css';
import '../../css/l/l2ftu14yk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="tyso1hb3g"/><path class="l2ftu14yk"/>`,
		"fallback": "ant-design:code-twotone",
	});
}

export default Component;
