import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/d/dizyr4b_v.css';
import '../../css/x/xm8fyk4mu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGw9gzR0fB"><g class="rohhhzb0l"><path class="zbocpbbaf"/><circle class="dizyr4b_v"/><path class="xm8fyk4mu"/></g></mask></defs><path mask="url(#SVGw9gzR0fB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-block",
	});
}

export default Component;
