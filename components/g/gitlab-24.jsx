import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kquo5_p3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kquo5_p3c"/>`,
		"fallback": "qlementine-icons:gitlab-24",
	});
}

export default Component;
