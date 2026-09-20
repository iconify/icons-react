import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/e/extkih.css';
import '../../css/t/txhpbi.css';
import '../../css/y/y3cyon.css';
import '../../css/p/puqm0y.css';
import '../../css/s/so-from-66.css';
import '../../css/d/d-3crpcp.css';
import '../../css/d/d-70g21a.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c extkih"/><path class="txhpbi"/><path class="a0m25c y3cyon"/><path class="a0m25c puqm0y"/>`,
		"fallback": "line-md:cellphone-arrow-up",
	});
}

export default Component;
