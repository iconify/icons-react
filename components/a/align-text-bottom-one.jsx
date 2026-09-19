import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/j/j9z-fuo6p.css';
import '../../css/n/n6v_12bbn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="j9z-fuo6p"/><path class="n6v_12bbn"/></g>`,
		"fallback": "icon-park:align-text-bottom-one",
	});
}

export default Component;
