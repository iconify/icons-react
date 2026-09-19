import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5v8cfb5j.css';
import '../../css/g/gd--6wbfj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5v8cfb5j"/><path class="gd--6wbfj"/>`,
		"fallback": "devicon:gatling-wordmark",
	});
}

export default Component;
