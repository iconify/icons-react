import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wuu1i6jkg.css';
import '../../css/l/lr7t7mjaw.css';
import '../../css/t/tdszk3itf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="wuu1i6jkg"/><path class="lr7t7mjaw"/><path class="tdszk3itf"/></g>`,
		"fallback": "iconamoon:cloud-error-thin",
	});
}

export default Component;
