import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crisv348n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="crisv348n"/>`,
		"fallback": "keyline-icons:database-sharp-fill",
	});
}

export default Component;
