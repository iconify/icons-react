import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqx0cbb0u.css';
import '../../css/q/qrs5x0bhg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqx0cbb0u"/><path class="qrs5x0bhg"/>`,
		"fallback": "devicon:clickhouse",
	});
}

export default Component;
