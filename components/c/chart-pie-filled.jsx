import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moc096_4x.css';
import '../../css/h/ha-x6codx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moc096_4x"/><path class="ha-x6codx"/>`,
		"fallback": "lucide-extended:chart-pie-filled",
	});
}

export default Component;
