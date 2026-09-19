import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mzszod_2j.css';
import '../../css/y/yy1voub1p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7XXJys9d"><g class="wwvp95byt"><circle class="mzszod_2j"/><path class="yy1voub1p"/></g></mask></defs><path mask="url(#SVG7XXJys9d)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:handle-x",
	});
}

export default Component;
