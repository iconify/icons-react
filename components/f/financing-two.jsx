import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/issgrdd1r.css';
import '../../css/y/ytgl6lbch.css';
import '../../css/t/tvonebcsg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWXB5Hr4t"><g class="rohhhzb0l"><path class="issgrdd1r"/><rect class="ytgl6lbch"/><path class="tvonebcsg"/></g></mask></defs><path mask="url(#SVGWXB5Hr4t)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:financing-two",
	});
}

export default Component;
