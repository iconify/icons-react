import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/l/lhfuylqog.css';
import '../../css/c/c95jdw12p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="m3rbq0wjz"/><path class="lhfuylqog"/><path class="c95jdw12p"/></g>`,
		"fallback": "icon-park-outline:file-withdrawal-one",
	});
}

export default Component;
