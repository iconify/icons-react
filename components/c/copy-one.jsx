import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/o/oy5gpjbhz.css';
import '../../css/s/s_ydpvbdg.css';
import '../../css/g/gkzojlsdx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQkwYHecj"><g class="gopnm44um"><path class="oy5gpjbhz"/><path class="s_ydpvbdg"/><path class="gkzojlsdx"/></g></mask></defs><path mask="url(#SVGQkwYHecj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:copy-one",
	});
}

export default Component;
