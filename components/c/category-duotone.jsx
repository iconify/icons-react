import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ey702vl0h.css';
import '../../css/y/ytxhlh7hz.css';
import '../../css/a/a03af4lru.css';
import '../../css/f/fhndzackx.css';
import '../../css/g/g1qifztlu.css';
import '../../css/r/rb4zlobtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ey702vl0h"/><circle class="ytxhlh7hz"/><path class="a03af4lru"/><circle class="fhndzackx"/><circle class="g1qifztlu"/><path class="rb4zlobtz"/></g>`,
		"fallback": "iconamoon:category-duotone",
	});
}

export default Component;
