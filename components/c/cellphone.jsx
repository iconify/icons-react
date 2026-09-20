import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9r6jx.css';
import '../../css/t/txhpbi.css';
import '../../css/s/so-from-66.css';
import '../../css/d/d-3crpcp.css';
import '../../css/d/d-70g21a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9r6jx"/><path class="txhpbi"/>`,
		"fallback": "line-md:cellphone",
	});
}

export default Component;
