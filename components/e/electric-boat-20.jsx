import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1weu1kyu.css';
import '../../css/d/dzk9j3baz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1weu1kyu"/><path class="dzk9j3baz"/>`,
		"fallback": "energy-icons:electric-boat-20",
	});
}

export default Component;
