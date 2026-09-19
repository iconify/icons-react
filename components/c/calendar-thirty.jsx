import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/heden_zra.css';
import '../../css/n/nfg3sbdil.css';
import '../../css/x/xj03q1b8k.css';
import '../../css/v/v9dfc7lua.css';
import '../../css/s/s_qxixb5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN8AMCeZN"><g class="wwvp95byt"><rect class="heden_zra"/><path class="nfg3sbdil"/><path class="xj03q1b8k"/><path clip-rule="evenodd" class="v9dfc7lua"/><path class="s_qxixb5o"/></g></mask></defs><path mask="url(#SVGN8AMCeZN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:calendar-thirty",
	});
}

export default Component;
