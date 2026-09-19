import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/def7nybhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="def7nybhu"/>`,
		"fallback": "grommet-icons:checkbox-selected",
	});
}

export default Component;
