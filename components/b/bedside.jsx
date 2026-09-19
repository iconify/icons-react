import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g9no8wbdz.css';
import '../../css/r/r2xc_4bjr.css';
import '../../css/y/ye177abvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAYFUwb2O"><g class="wwvp95byt"><path class="g9no8wbdz"/><path class="r2xc_4bjr"/><path class="ye177abvk"/></g></mask></defs><path mask="url(#SVGAYFUwb2O)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bedside",
	});
}

export default Component;
