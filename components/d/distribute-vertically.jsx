import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zsmadgbrk.css';
import '../../css/r/ra83ujb3l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwSXmnKKa"><g class="v3_i3wktz"><path class="zsmadgbrk"/><path class="ra83ujb3l"/></g></mask></defs><path mask="url(#SVGwSXmnKKa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:distribute-vertically",
	});
}

export default Component;
