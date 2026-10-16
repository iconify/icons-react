import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nusxv79yo.css';
import '../../css/s/s3zf9ib5t.css';
import '../../css/f/f7-q73bok.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nusxv79yo"/><path class="s3zf9ib5t"/><path class="f7-q73bok"/>`,
		"fallback": "energy-icons:ammonia-tank-20-bold",
	});
}

export default Component;
