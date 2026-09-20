import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snp287xku.css';
import '../../css/l/lw_xbhbhf.css';
import '../../css/q/qo36bx88l.css';
import '../../css/x/xye16jy8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snp287xku"/><path class="lw_xbhbhf"/><path class="qo36bx88l"/><path class="xye16jy8d"/>`,
		"fallback": "streamline-emojis:heart-suit",
	});
}

export default Component;
