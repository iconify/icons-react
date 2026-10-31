import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uymd6cc2a.css';
import '../../css/z/zlb4ypb7t.css';
import '../../css/n/ncdgvlbmv.css';
import '../../css/y/yytdjbbtn.css';
import '../../css/s/s2n-libcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uymd6cc2a wm-shadow"/><path class="zlb4ypb7t"/><path class="ncdgvlbmv"/><path class="yytdjbbtn"/><path class="s2n-libcu"/></g>`,
		"fallback": "withicons-retro:bug",
	});
}

export default Component;
