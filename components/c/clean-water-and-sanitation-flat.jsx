import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ula3hab2h.css';
import '../../css/p/pmhbx0b3m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ula3hab2h"/><path class="pmhbx0b3m"/></g>`,
		"fallback": "streamline-color:clean-water-and-sanitation-flat",
	});
}

export default Component;
