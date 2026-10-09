import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zain2eb2r.css';
import '../../css/s/sk4ad7b3f.css';
import '../../css/e/epmi80zpc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zain2eb2r"/><path class="sk4ad7b3f"/><path class="epmi80zpc"/>`,
		"fallback": "energy-icons:calendar-clock-20",
	});
}

export default Component;
