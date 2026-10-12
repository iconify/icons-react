import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ravrb1b2k.css';
import '../../css/s/s9p5b8y_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ravrb1b2k"/><path class="s9p5b8y_x"/>`,
		"fallback": "lucide-extended:database-zap-filled",
	});
}

export default Component;
