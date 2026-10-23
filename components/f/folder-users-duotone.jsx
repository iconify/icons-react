import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mm7o0g9ni.css';
import '../../css/d/dnbhgk0gf.css';
import '../../css/f/fjz2lp2no.css';
import '../../css/f/fqxr7ibpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mm7o0g9ni"/><path class="dnbhgk0gf"/><path class="fjz2lp2no"/><path class="fqxr7ibpl"/></g>`,
		"fallback": "lucide-extended:folder-users-duotone",
	});
}

export default Component;
