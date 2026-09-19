import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afvdaibxt.css';
import '../../css/w/wfvxprbyc.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afvdaibxt"/><path class="wfvxprbyc"/>`,
		"fallback": "fontisto:hotel",
	});
}

export default Component;
