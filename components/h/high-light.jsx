import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/udkgazzrc.css';
import '../../css/o/o-hsaebns.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGr33dnebo"><g class="v3_i3wktz"><path class="udkgazzrc"/><path class="o-hsaebns"/></g></mask></defs><path mask="url(#SVGr33dnebo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:high-light",
	});
}

export default Component;
