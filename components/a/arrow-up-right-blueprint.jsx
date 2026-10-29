import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sn-3ut9iw.css';
import '../../css/m/m46r2fraf.css';
import '../../css/r/ruqcf6b8z.css';
import '../../css/g/glei08b-e.css';
import '../../css/o/o26o7ko9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sn-3ut9iw wm-deco"/><path class="m46r2fraf wm-k"/><path class="ruqcf6b8z wm-a"/><path class="glei08b-e wm-k"/><path class="o26o7ko9d wm-a"/></g>`,
		"fallback": "withicons:arrow-up-right-blueprint",
	});
}

export default Component;
