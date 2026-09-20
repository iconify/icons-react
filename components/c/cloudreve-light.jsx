import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5lssuuqi.css';
import '../../css/l/l6-eqnrfk.css';
import '../../css/l/lvzdmsb9x.css';
import '../../css/c/cf9gd76rf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5lssuuqi"/><circle class="l6-eqnrfk"/><path class="lvzdmsb9x"/><path class="cf9gd76rf"/>`,
		"fallback": "selfhst:cloudreve-light",
	});
}

export default Component;
