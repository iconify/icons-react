import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/q/q37jtebrq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6YB6Mb1Z"><g class="rohhhzb0l"><path class="zbocpbbaf"/><path class="q37jtebrq"/></g></mask></defs><path mask="url(#SVG6YB6Mb1Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-plus",
	});
}

export default Component;
