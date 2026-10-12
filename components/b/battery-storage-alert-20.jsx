import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwvkumbtq.css';
import '../../css/d/dgoos-asp.css';
import '../../css/e/edxwc44sq.css';
import '../../css/l/lb00gu55i.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwvkumbtq"/><path class="dgoos-asp"/><path class="edxwc44sq"/><path class="lb00gu55i"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:battery-storage-alert-20",
	});
}

export default Component;
