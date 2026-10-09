import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbtvgabzb.css';
import '../../css/i/igsxkccpo.css';
import '../../css/l/lybvyzwhf.css';
import '../../css/v/vseb-gbvo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbtvgabzb"/><path class="igsxkccpo"/><path class="lybvyzwhf"/><path class="vseb-gbvo"/>`,
		"fallback": "energy-icons:anchor-20",
	});
}

export default Component;
