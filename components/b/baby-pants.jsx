import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/j-mnydb-a.css';
import '../../css/w/wlfkgo59g.css';
import '../../css/l/l2jvo5b4v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGH50EMwWB"><g class="ufeehvblu"><path class="j-mnydb-a"/><path class="wlfkgo59g"/><path class="l2jvo5b4v"/></g></mask></defs><path mask="url(#SVGH50EMwWB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:baby-pants",
	});
}

export default Component;
