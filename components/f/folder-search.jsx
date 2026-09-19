import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/m/my85mgn3v.css';
import '../../css/w/wxrtcfo2g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfBZ0Dcan"><g class="rohhhzb0l"><path class="zbocpbbaf"/><circle class="my85mgn3v"/><path class="wxrtcfo2g"/></g></mask></defs><path mask="url(#SVGfBZ0Dcan)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-search",
	});
}

export default Component;
