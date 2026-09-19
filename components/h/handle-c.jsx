import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mzszod_2j.css';
import '../../css/j/j6fd_zqzm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9thyFbJj"><g class="wwvp95byt"><circle class="mzszod_2j"/><path class="j6fd_zqzm"/></g></mask></defs><path mask="url(#SVG9thyFbJj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:handle-c",
	});
}

export default Component;
