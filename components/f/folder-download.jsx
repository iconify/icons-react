import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/z/zvlfr-bkq.css';
import '../../css/r/raobunbaw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="zvlfr-bkq"/><path class="raobunbaw"/></g>`,
		"fallback": "icon-park:folder-download",
	});
}

export default Component;
