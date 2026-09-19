import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tiy5f4bif.css';
import '../../css/q/q00jexb8o.css';
import '../../css/j/j1xjnqltu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZX7zMeFL"><g class="aql7dnt-u"><path class="tiy5f4bif"/><circle class="q00jexb8o"/><path class="j1xjnqltu"/></g></mask></defs><path mask="url(#SVGZX7zMeFL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:big-clock",
	});
}

export default Component;
