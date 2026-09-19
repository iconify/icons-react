import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kucvonbff.css';
import '../../css/v/vwmiwvqxu.css';
import '../../css/l/l-o0nybcd.css';
import '../../css/y/yrnurdb8p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGH3ktoe7F"><g class="ft5dv1b6b"><path class="kucvonbff"/><path class="vwmiwvqxu"/><path class="l-o0nybcd"/><path class="yrnurdb8p"/></g></mask></defs><path mask="url(#SVGH3ktoe7F)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:focus-one",
	});
}

export default Component;
