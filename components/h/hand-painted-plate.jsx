import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oir0lgm3q.css';
import '../../css/t/tl9zl_bgh.css';
import '../../css/v/va9su9boj.css';
import '../../css/o/ou7ftt5cl.css';
import '../../css/x/xglxclsqa.css';
import '../../css/i/ixlehe9lz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiJaPAejT"><g class="ft5dv1b6b"><path class="oir0lgm3q"/><path class="tl9zl_bgh"/><path class="va9su9boj"/><path class="ou7ftt5cl"/><rect class="xglxclsqa"/><rect class="ixlehe9lz"/></g></mask></defs><path mask="url(#SVGiJaPAejT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hand-painted-plate",
	});
}

export default Component;
