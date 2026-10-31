import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-cm0ty8h.css';
import '../../css/u/uwwux4bdl.css';
import '../../css/l/l_fae7rzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i-cm0ty8h"/><path class="uwwux4bdl"/><path class="l_fae7rzf"/>`,
		"fallback": "lucide-extended:file-database-filled",
	});
}

export default Component;
