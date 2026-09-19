import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5e-a9baq.css';
import '../../css/x/xigncxkgn.css';
import '../../css/v/v4lpm3r4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5e-a9baq"/><path class="xigncxkgn"/><path class="v4lpm3r4t"/>`,
		"fallback": "grommet-icons:help-book",
	});
}

export default Component;
