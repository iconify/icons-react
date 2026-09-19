import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knf-jaczf.css';
import '../../css/z/zakcsrw3t.css';
import '../../css/m/m_hfkybog.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knf-jaczf"/><rect class="zakcsrw3t"/><path class="m_hfkybog"/>`,
		"fallback": "famicons:gift-outline",
	});
}

export default Component;
