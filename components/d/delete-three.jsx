import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mzszod_2j.css';
import '../../css/q/ql5u_n4hs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7Sv5okMa"><g class="s9cl3zbei"><circle class="mzszod_2j"/><path class="ql5u_n4hs"/></g></mask></defs><path mask="url(#SVG7Sv5okMa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:delete-three",
	});
}

export default Component;
