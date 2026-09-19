import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zml4mvy9b.css';
import '../../css/g/gertnpb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zml4mvy9b"/><path class="gertnpb5w"/>`,
		"fallback": "fontisto:arrow-down",
	});
}

export default Component;
