import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/a/ajralqjgp.css';
import '../../css/c/cuoo052vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="ajralqjgp"/><path class="cuoo052vc"/>`,
		"fallback": "solar:inbox-in-bold-duotone",
	});
}

export default Component;
