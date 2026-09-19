import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8qb438it.css';
import '../../css/l/lhvcaet_c.css';
import '../../css/w/wu_w831hd.css';
import '../../css/t/txx4xebwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8qb438it"/><path class="lhvcaet_c"/><path class="wu_w831hd"/><rect class="txx4xebwg"/>`,
		"fallback": "gcp:cloud-monitoring",
	});
}

export default Component;
