import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sda9-cbdy.css';
import '../../css/i/iqyejnbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="sda9-cbdy"/><path class="iqyejnbqu"/></g>`,
		"fallback": "streamline-logos:geforce-now-logo",
	});
}

export default Component;
