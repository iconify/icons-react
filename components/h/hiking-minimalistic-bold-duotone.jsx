import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5kxlh9of.css';
import '../../css/g/ggo_f5bme.css';
import '../../css/k/khoud0dhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5kxlh9of"/><path clip-rule="evenodd" class="ggo_f5bme"/><path class="khoud0dhf"/>`,
		"fallback": "solar:hiking-minimalistic-bold-duotone",
	});
}

export default Component;
