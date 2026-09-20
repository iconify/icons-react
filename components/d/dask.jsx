import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmjd6gzzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmjd6gzzx"/>`,
		"fallback": "thesvg-color:dask",
	});
}

export default Component;
