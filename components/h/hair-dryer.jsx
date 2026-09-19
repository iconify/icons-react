import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/orqm88b8k.css';
import '../../css/f/fhyknpbnv.css';
import '../../css/z/zr0h6scca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="orqm88b8k"/><path class="fhyknpbnv"/><path class="zr0h6scca"/></g>`,
		"fallback": "icon-park-outline:hair-dryer",
	});
}

export default Component;
