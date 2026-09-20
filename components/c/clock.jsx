import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqbayhb7u.css';
import '../../css/v/v8kcivbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqbayhb7u"/><path class="v8kcivbny"/>`,
		"fallback": "uim:clock",
	});
}

export default Component;
