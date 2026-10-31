import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arptzobve.css';
import '../../css/d/dx2s81qry.css';
import '../../css/i/ibqujl9ke.css';
import '../../css/d/dr4fvnbnn.css';
import '../../css/c/cyggpsbab.css';
import '../../css/z/z1q6w1bdy.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arptzobve"/><path class="dx2s81qry"/><path class="ibqujl9ke"/><path class="dr4fvnbnn"/><path class="cyggpsbab"/><path class="z1q6w1bdy"/>`,
		"fallback": "tabler-flags:gibraltar",
	});
}

export default Component;
