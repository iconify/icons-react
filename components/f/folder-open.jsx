import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn1v9ob2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn1v9ob2n"/>`,
		"fallback": "grommet-icons:folder-open",
	});
}

export default Component;
