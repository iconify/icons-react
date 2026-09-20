import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sb8bzcbcd.css';
import '../../css/b/b1w30acsv.css';
import '../../css/y/yl4tr1vao.css';
import '../../css/d/d7rn_gbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="sb8bzcbcd"/><path class="b1w30acsv"/><path class="yl4tr1vao"/><path clip-rule="evenodd" class="d7rn_gbhk"/></g>`,
		"fallback": "streamline-logos:beyondcorp-enterprise-logo",
	});
}

export default Component;
