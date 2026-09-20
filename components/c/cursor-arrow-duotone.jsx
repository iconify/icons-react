import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgpeqgbme.css';
import '../../css/b/bsih12bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgpeqgbme"/><path class="bsih12bdi"/>`,
		"fallback": "stash:cursor-arrow-duotone",
	});
}

export default Component;
