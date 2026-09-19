import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jar0caccs.css';
import '../../css/l/loy56xi0j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jar0caccs"/><path class="loy56xi0j"/>`,
		"fallback": "carbon:direction-right-01-filled",
	});
}

export default Component;
