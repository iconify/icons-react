import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/e/extkih.css';
import '../../css/t/txhpbi.css';
import '../../css/i/ic1ogj.css';
import '../../css/i/ix-rlm.css';
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
		"content": `<path class="a0m25c extkih"/><path class="txhpbi"/><path class="a0m25c ic1ogj"/><path class="a0m25c ix-rlm"/>`,
		"fallback": "line-md:cellphone-arrow-down",
	});
}

export default Component;
