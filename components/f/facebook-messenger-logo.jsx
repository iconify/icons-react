import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kq5ulfbrl.css';
import '../../css/s/sktwj-c6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kq5ulfbrl"/><path class="sktwj-c6s"/></g>`,
		"fallback": "streamline-logos:facebook-messenger-logo",
	});
}

export default Component;
