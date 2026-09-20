import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le_tmjbos.css';
import '../../css/r/rx80esbgs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le_tmjbos"/><path class="rx80esbgs"/>`,
		"fallback": "selfhst:fandango",
	});
}

export default Component;
