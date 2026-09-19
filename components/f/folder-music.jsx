import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/t/t_3zzecey.css';
import '../../css/p/pw4gvvwjn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="t_3zzecey"/><circle class="pw4gvvwjn"/></g>`,
		"fallback": "icon-park:folder-music",
	});
}

export default Component;
