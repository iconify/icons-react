import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/b/b9ar51ayx.css';
import '../../css/p/p1ehdabkg.css';
import '../../css/f/f3gvbxbbm.css';
import '../../css/n/ns2om9uwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="b9ar51ayx"/><path class="p1ehdabkg"/><path class="f3gvbxbbm"/><path class="ns2om9uwr"/></g>`,
		"fallback": "icon-park:folder-conversion",
	});
}

export default Component;
