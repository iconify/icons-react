import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tbos5abqc.css';
import '../../css/t/tycpr5b0m.css';
import '../../css/t/tglh5kq5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="tbos5abqc"/><path class="tycpr5b0m"/><path class="tglh5kq5a"/></g>`,
		"fallback": "streamline-logos:brightkite-logo",
	});
}

export default Component;
