import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2k9crezi.css';
import '../../css/k/koc75zbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2k9crezi"/><path class="koc75zbyp"/>`,
		"fallback": "lucide-extended:cloud-lightning-filled",
	});
}

export default Component;
