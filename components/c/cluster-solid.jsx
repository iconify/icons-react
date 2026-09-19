import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfcifqksu.css';
import '../../css/n/nqwwnccno.css';
import '../../css/p/pas2p2bgh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 xfcifqksu"/><path class="clr-i-solid clr-i-solid-path-2 nqwwnccno"/><path class="clr-i-solid clr-i-solid-path-3 pas2p2bgh"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:cluster-solid",
	});
}

export default Component;
