import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pffhewbcz.css';
import '../../css/b/bcag0_byz.css';
import '../../css/m/m3mc73wcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pffhewbcz"/><path class="bcag0_byz"/><path class="m3mc73wcc"/>`,
		"fallback": "uim:chart-pie",
	});
}

export default Component;
