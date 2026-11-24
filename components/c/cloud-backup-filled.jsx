import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cltq9j6ti.css';
import '../../css/q/qfntjihwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cltq9j6ti"/><path class="qfntjihwd"/>`,
		"fallback": "lucide-extended:cloud-backup-filled",
	});
}

export default Component;
