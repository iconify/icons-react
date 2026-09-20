import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e6m3ae0ep.css';
import '../../css/g/gmss5kbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="e6m3ae0ep"/><path class="gmss5kbzw"/></g>`,
		"fallback": "streamline-logos:amazon-luna-logo",
	});
}

export default Component;
