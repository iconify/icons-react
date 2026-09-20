import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/o679ktz3a.css';
import '../../css/v/v9jno10kq.css';
import '../../css/k/ks4b0ybcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="o679ktz3a"/><path class="v9jno10kq"/><path class="ks4b0ybcf"/></g>`,
		"fallback": "streamline-logos:claris-logo",
	});
}

export default Component;
