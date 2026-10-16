import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mneset-vt.css';
import '../../css/i/iha57zbze.css';
import '../../css/x/xrneb2bxe.css';
import '../../css/j/j2xr3seuj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mneset-vt"/><path class="iha57zbze"/><path class="xrneb2bxe"/><path class="j2xr3seuj"/>`,
		"fallback": "energy-icons:hydrogen-bus-20",
	});
}

export default Component;
