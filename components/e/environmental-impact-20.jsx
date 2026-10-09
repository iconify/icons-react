import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bodkpqb0q.css';
import '../../css/a/a07z9hbzk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bodkpqb0q"/><path class="a07z9hbzk"/>`,
		"fallback": "energy-icons:environmental-impact-20",
	});
}

export default Component;
