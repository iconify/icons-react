import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkpsqzbwi.css';
import '../../css/s/si75a-bbq.css';
import '../../css/v/v1_beqnys.css';
import '../../css/l/l_fae7rzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkpsqzbwi"/><path class="si75a-bbq"/><path class="v1_beqnys"/><path class="l_fae7rzf"/>`,
		"fallback": "lucide-extended:file-digit-filled",
	});
}

export default Component;
