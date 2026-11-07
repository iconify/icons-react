import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/a/ajralqjgp.css';
import '../../css/n/n2x9ccb-p.css';
import '../../css/x/xd2516b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="ajralqjgp"/><path class="n2x9ccb-p"/><path class="xd2516b2r"/>`,
		"fallback": "solar:inbox-line-bold-duotone",
	});
}

export default Component;
