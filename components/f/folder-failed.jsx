import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/c/cf3sug14i.css';
import '../../css/h/hrj8axb6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="cf3sug14i"/><path class="hrj8axb6z"/></g>`,
		"fallback": "icon-park:folder-failed",
	});
}

export default Component;
