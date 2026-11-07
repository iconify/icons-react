import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esgn2qmgb.css';
import '../../css/g/g1-qbmafx.css';
import '../../css/u/ul-233bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="esgn2qmgb"/><path class="g1-qbmafx"/><path class="ul-233bzy"/>`,
		"fallback": "solar:align-bottom-bold",
	});
}

export default Component;
