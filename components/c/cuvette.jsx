import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f1hzz0jas.css';
import '../../css/r/r8r179s3m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="f1hzz0jas"/><path class="r8r179s3m"/></g>`,
		"fallback": "icon-park-outline:cuvette",
	});
}

export default Component;
