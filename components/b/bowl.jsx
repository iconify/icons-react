import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zfditzbpf.css';
import '../../css/z/zz2wdgb5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zfditzbpf"/><path class="zz2wdgb5t"/></g>`,
		"fallback": "icon-park-solid:bowl",
	});
}

export default Component;
