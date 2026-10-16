import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdt8a4bzn.css';
import '../../css/a/aww9a8bny.css';
import '../../css/l/lypweqb-i.css';
import '../../css/g/gl28njbdi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdt8a4bzn"/><path class="aww9a8bny"/><path class="lypweqb-i"/><path class="gl28njbdi"/>`,
		"fallback": "energy-icons:corn-20",
	});
}

export default Component;
