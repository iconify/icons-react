import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eooclpefv.css';
import '../../css/x/x71vmdblh.css';
import '../../css/g/gw4fceh0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eooclpefv"/><path class="x71vmdblh"/><path class="gw4fceh0j"/>`,
		"fallback": "solar:battery-charge-bold-duotone",
	});
}

export default Component;
