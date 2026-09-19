import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/h/hf2-qhbfh.css';
import '../../css/i/iu_7h2b0u.css';
import '../../css/v/vytau2beg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="hf2-qhbfh"/><path class="iu_7h2b0u"/><path class="vytau2beg"/></g>`,
		"fallback": "icon-park:align-text-right-one",
	});
}

export default Component;
