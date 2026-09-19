import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/ll0y2ac_q.css';
import '../../css/l/lk5d9obsg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFwqpmh9a"><g class="wwvp95byt"><path class="ll0y2ac_q"/><path class="lk5d9obsg"/></g></mask></defs><path mask="url(#SVGFwqpmh9a)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:car-battery",
	});
}

export default Component;
