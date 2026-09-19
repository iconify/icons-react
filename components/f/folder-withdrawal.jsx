import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/d/dmnntrbnl.css';
import '../../css/j/jayyg5beu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="dmnntrbnl"/><path class="jayyg5beu"/></g>`,
		"fallback": "icon-park:folder-withdrawal",
	});
}

export default Component;
