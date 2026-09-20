import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqej--b6i.css';
import '../../css/t/tugds-b3r.css';
import '../../css/p/pm0g67oqy.css';
import '../../css/s/ssw690b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqej--b6i"/><rect class="tugds-b3r"/><path class="pm0g67oqy"/><rect class="ssw690b0o"/></g>`,
		"fallback": "majesticons:checkbox-list-detail",
	});
}

export default Component;
