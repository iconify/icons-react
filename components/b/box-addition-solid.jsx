import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-2h97zdb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-2h97zdb"/>`,
		"fallback": "fluent-mdl2:box-addition-solid",
	});
}

export default Component;
