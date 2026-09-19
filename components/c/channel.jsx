import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rop--mbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rop--mbxv"/>`,
		"fallback": "grommet-icons:channel",
	});
}

export default Component;
