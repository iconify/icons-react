import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1hyk4bcd.css';
import '../../css/i/ipulo8bps.css';
import '../../css/u/us9k6caky.css';
import '../../css/n/ncdf36bgi.css';
import '../../css/k/kznbvsbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1hyk4bcd"/><path class="ipulo8bps"/><path class="us9k6caky"/><path class="ncdf36bgi"/><path class="kznbvsbuq"/>`,
		"fallback": "token:bst",
	});
}

export default Component;
