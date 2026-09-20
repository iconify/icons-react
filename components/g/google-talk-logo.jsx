import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w6wnjq9db.css';
import '../../css/l/l--0jzb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="w6wnjq9db"/><path class="l--0jzb2z"/></g>`,
		"fallback": "streamline-logos:google-talk-logo",
	});
}

export default Component;
