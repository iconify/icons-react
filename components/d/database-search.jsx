import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/k2ksg3lap.css';
import '../../css/k/kjnorp87f.css';
import '../../css/j/jh4i9pblc.css';
import '../../css/i/it9cnft9l.css';
import '../../css/i/idp3idbce.css';
import '../../css/s/sc9239ybg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG85PoJb8k"><g class="wwvp95byt"><path class="k2ksg3lap"/><path class="kjnorp87f"/><path class="jh4i9pblc"/><path class="it9cnft9l"/><path class="idp3idbce"/><path class="sc9239ybg"/></g></mask></defs><path mask="url(#SVG85PoJb8k)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:database-search",
	});
}

export default Component;
