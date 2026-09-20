import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umcxplilb.css';
import '../../css/r/r2vwgjbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umcxplilb"/><path class="r2vwgjbvw"/>`,
		"fallback": "tdesign:dam-4-filled",
	});
}

export default Component;
