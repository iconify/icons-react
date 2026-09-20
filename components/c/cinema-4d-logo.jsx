import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sj-7aacby.css';
import '../../css/x/x-5baobki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="sj-7aacby"/><path class="x-5baobki"/></g>`,
		"fallback": "streamline-logos:cinema-4d-logo",
	});
}

export default Component;
