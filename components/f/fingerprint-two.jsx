import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wsfij0b4p.css';
import '../../css/n/ncxiq1q2o.css';
import '../../css/i/il2eyjbiw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wsfij0b4p"/><path class="ncxiq1q2o"/><path class="il2eyjbiw"/></g>`,
		"fallback": "icon-park-outline:fingerprint-two",
	});
}

export default Component;
