import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mnbdjobol.css';
import '../../css/p/pob-507pd.css';
import '../../css/y/yt4nl8b6h.css';
import '../../css/t/tlrdff70f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mnbdjobol"/><path class="pob-507pd wm-a"/><path class="wm-k yt4nl8b6h"/><path class="tlrdff70f wm-a"/></g>`,
		"fallback": "withicons:circle-dollar-sign-sketch",
	});
}

export default Component;
