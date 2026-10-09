import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_nc-k5jc.css';
import '../../css/b/b9b858bmv.css';
import '../../css/t/tplhgkhuc.css';
import '../../css/l/lupdytbsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_nc-k5jc"/><path class="b9b858bmv"/><path class="tplhgkhuc"/><path class="lupdytbsv"/>`,
		"fallback": "energy-icons:data-centre-20-bold",
	});
}

export default Component;
