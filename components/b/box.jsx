import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/uk6juhlzl.css';
import '../../css/b/b6sl7kbuk.css';
import '../../css/i/ib__xqbme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="uk6juhlzl"/><path class="b6sl7kbuk"/><path class="ib__xqbme"/></g>`,
		"fallback": "icon-park:box",
	});
}

export default Component;
