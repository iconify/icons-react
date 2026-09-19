import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/u/urh-5wcvp.css';
import '../../css/h/hlbprpbiu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ftpkt8zyt"/><circle class="urh-5wcvp"/><path class="hlbprpbiu"/></g>`,
		"fallback": "icon-park-outline:file-search-one",
	});
}

export default Component;
