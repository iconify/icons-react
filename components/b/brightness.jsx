import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5s4ij3iu.css';
import '../../css/z/z4a_2z-dy.css';
import '../../css/v/vpx938hem.css';
import '../../css/v/v_nzipb8v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGat6CjcGc"><g class="ft5dv1b6b"><path class="w5s4ij3iu"/><path class="z4a_2z-dy"/><path clip-rule="evenodd" class="vpx938hem"/><path class="v_nzipb8v"/></g></mask></defs><path mask="url(#SVGat6CjcGc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:brightness",
	});
}

export default Component;
