import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r56981bwx.css';
import '../../css/o/ol6cddb-q.css';
import '../../css/y/y954mibjs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r56981bwx"/><path class="ol6cddb-q"/><path class="y954mibjs"/>`,
		"fallback": "energy-icons:gift-20-bold",
	});
}

export default Component;
