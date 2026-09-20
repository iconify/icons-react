import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4spd6uww.css';
import '../../css/a/ag-fl02wi.css';
import '../../css/d/d7aps8ede.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4spd6uww"/><path class="ag-fl02wi"/><path class="d7aps8ede"/>`,
		"fallback": "streamline-pixel:content-files-open-book-bookmark",
	});
}

export default Component;
