import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdk57lw0q.css';
import '../../css/l/lnokh_j4l.css';
import '../../css/v/vjh29ff2i.css';
import '../../css/p/pg2hytb_n.css';
import '../../css/o/ozejrfben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdk57lw0q"/><path class="lnokh_j4l"/><path class="vjh29ff2i"/><path class="pg2hytb_n"/><path class="ozejrfben"/>`,
		"fallback": "gcp:cloud-data-fusion",
	});
}

export default Component;
