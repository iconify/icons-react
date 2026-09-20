import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eopzv-del.css';
import '../../css/r/rpr4n5bjf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eopzv-del"/><path class="rpr4n5bjf"/></g>`,
		"fallback": "streamline:gift-solid",
	});
}

export default Component;
