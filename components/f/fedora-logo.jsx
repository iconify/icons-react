import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/f6trtljmw.css';
import '../../css/b/bqjvqdb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="f6trtljmw"/><path class="bqjvqdb9g"/></g>`,
		"fallback": "streamline-logos:fedora-logo",
	});
}

export default Component;
