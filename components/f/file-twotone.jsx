import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kilinm.css';
import '../../css/k/kyznsp.css';
import '../../css/k/k50i_c.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kilinm kyznsp"/><path class="k50i_c kyznsp"/>`,
		"fallback": "line-md:file-twotone",
	});
}

export default Component;
