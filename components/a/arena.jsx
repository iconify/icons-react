import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4e4mlb2g.css';
import '../../css/z/zhcnnrbqz.css';
import '../../css/y/yg0-h_7ex.css';
import '../../css/t/tfvzfne0e.css';
import '../../css/y/yhtph-bed.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2KZNkb0S"><g class="u4e4mlb2g"><path class="zhcnnrbqz"/><path class="yg0-h_7ex"/><path class="tfvzfne0e"/><path class="yhtph-bed"/></g></mask></defs><path mask="url(#SVG2KZNkb0S)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:arena",
	});
}

export default Component;
