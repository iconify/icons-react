import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqoupubsw.css';
import '../../css/j/j9xgzpbyl.css';
import '../../css/e/elhd0fb5i.css';
import '../../css/g/gsfwadbzw.css';
import '../../css/s/s6-zm8vzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqoupubsw"/><path class="j9xgzpbyl"/><path class="elhd0fb5i"/><path class="gsfwadbzw"/><path class="s6-zm8vzj"/>`,
		"fallback": "energy-icons:ev-plugged-48",
	});
}

export default Component;
