import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgsm_4xdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hgsm_4xdc"/>`,
		"fallback": "lucide-extended:faucet-filled",
	});
}

export default Component;
