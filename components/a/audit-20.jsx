import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bodkpqb0q.css';
import '../../css/p/p3ccqddap.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bodkpqb0q"/><path class="p3ccqddap"/>`,
		"fallback": "energy-icons:audit-20",
	});
}

export default Component;
