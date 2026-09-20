import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qapg4nbep.css';
import '../../css/o/ornh4vsav.css';
import '../../css/k/kkm2lbcqf.css';
import '../../css/o/o29m-dbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qapg4nbep"/><path class="ornh4vsav"/><path clip-rule="evenodd" class="kkm2lbcqf"/><path class="o29m-dbby"/>`,
		"fallback": "token:aag",
	});
}

export default Component;
