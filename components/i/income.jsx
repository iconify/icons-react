import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xiobicbch.css';
import '../../css/a/a2yytq1-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xiobicbch"/><path class="a2yytq1-o"/></g>`,
		"fallback": "icon-park-outline:income",
	});
}

export default Component;
