import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_8he5btp.css';
import '../../css/a/axjnae9lz.css';
import '../../css/n/n6lorqbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_8he5btp"/><path class="axjnae9lz"/><path class="n6lorqbqf"/></g>`,
		"fallback": "lucide-extended:drum-duotone",
	});
}

export default Component;
