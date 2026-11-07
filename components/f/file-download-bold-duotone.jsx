import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgd8bzbml.css';
import '../../css/r/rrc0fzxvj.css';
import '../../css/s/sn15dubbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="rrc0fzxvj"/><path class="sn15dubbm"/>`,
		"fallback": "solar:file-download-bold-duotone",
	});
}

export default Component;
