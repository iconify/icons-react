import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3jvjrbaz.css';
import '../../css/d/d9k27_-5v.css';
import '../../css/n/n1h2j9b4e.css';
import '../../css/x/x-d4y8bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3jvjrbaz"/><path class="d9k27_-5v"/><path class="n1h2j9b4e"/><path class="x-d4y8bfd"/>`,
		"fallback": "token:cby",
	});
}

export default Component;
