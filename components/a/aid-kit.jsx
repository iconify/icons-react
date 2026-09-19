import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbc_uw_bh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbc_uw_bh"/>`,
		"fallback": "icomoon-free:aid-kit",
	});
}

export default Component;
