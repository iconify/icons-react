import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/efw08_bbt.css';
import '../../css/q/quk6wdbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="efw08_bbt"/><path class="quk6wdbwv"/></g>`,
		"fallback": "streamline-logos:alpine-linux-logo",
	});
}

export default Component;
