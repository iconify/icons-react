import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayq_smivk.css';
import '../../css/h/ht6zbmbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayq_smivk"/><path clip-rule="evenodd" class="ht6zbmbwp"/>`,
		"fallback": "lucide-extended:fire-extinguisher-filled",
	});
}

export default Component;
