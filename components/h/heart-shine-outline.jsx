import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsw0kfist.css';
import '../../css/m/m7uupmu6z.css';
import '../../css/l/lf2p90b9n.css';
import '../../css/a/a41ymvzkm.css';
import '../../css/r/rm39invnc.css';
import '../../css/b/bn6ftp6as.css';
import '../../css/w/wd34xy59x.css';
import '../../css/i/imizgo60u.css';
import '../../css/y/y92sfdbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsw0kfist"/><path clip-rule="evenodd" class="m7uupmu6z"/><path class="lf2p90b9n"/><path class="a41ymvzkm"/><path class="rm39invnc"/><path class="bn6ftp6as"/><path class="wd34xy59x"/><path class="imizgo60u"/><path class="y92sfdbcz"/>`,
		"fallback": "solar:heart-shine-outline",
	});
}

export default Component;
