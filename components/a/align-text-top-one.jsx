import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/x/xmh5i7bxm.css';
import '../../css/a/awdydhxed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="xmh5i7bxm"/><path class="awdydhxed"/></g>`,
		"fallback": "icon-park:align-text-top-one",
	});
}

export default Component;
