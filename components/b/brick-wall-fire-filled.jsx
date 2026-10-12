import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu4kwc0bq.css';
import '../../css/s/sma_z600n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu4kwc0bq"/><path clip-rule="evenodd" class="sma_z600n"/>`,
		"fallback": "lucide-extended:brick-wall-fire-filled",
	});
}

export default Component;
