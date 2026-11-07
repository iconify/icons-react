import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6utdgbib.css';
import '../../css/r/rhj7tk-5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6utdgbib"/><path class="rhj7tk-5q"/>`,
		"fallback": "solar:file-bold",
	});
}

export default Component;
