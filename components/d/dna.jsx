import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/f/fic52hb-m.css';
import '../../css/m/mtx6jf4xy.css';
import '../../css/o/o8x1rfpnw.css';
import '../../css/k/k0b12kb_x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="fic52hb-m"/><path class="mtx6jf4xy"/><path class="o8x1rfpnw"/><path class="k0b12kb_x"/></g>`,
		"fallback": "streamline-plump:dna",
	});
}

export default Component;
