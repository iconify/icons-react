import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6wl26b_a.css';
import '../../css/g/gh_u1c66p.css';
import '../../css/z/z_3d8eb9h.css';
import '../../css/k/k0nky2wkk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a6wl26b_a"/><circle class="gh_u1c66p"/><circle class="z_3d8eb9h"/><path class="k0nky2wkk"/>`,
		"fallback": "famicons:code-working-sharp",
	});
}

export default Component;
