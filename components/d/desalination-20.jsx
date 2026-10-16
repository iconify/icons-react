import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gah9kwbpq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gah9kwbpq"/>`,
		"fallback": "energy-icons:desalination-20",
	});
}

export default Component;
