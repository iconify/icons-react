import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnzy3hbtk.css';
import '../../css/k/kyzmhfbwr.css';
import '../../css/u/uby945npi.css';
import '../../css/e/ethvzbbdu.css';
import '../../css/o/o90v17boa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnzy3hbtk"/><path class="kyzmhfbwr"/><path class="uby945npi"/><path class="ethvzbbdu"/><path class="o90v17boa"/>`,
		"fallback": "devicon:googlecloud-wordmark",
	});
}

export default Component;
