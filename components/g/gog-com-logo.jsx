import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pu6xz3bxa.css';
import '../../css/t/tk9to7i5w.css';
import '../../css/m/mizf5lk8d.css';
import '../../css/m/m0fei_bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="pu6xz3bxa"/><path class="tk9to7i5w"/><path class="mizf5lk8d"/><path class="m0fei_bda"/></g>`,
		"fallback": "streamline-logos:gog-com-logo",
	});
}

export default Component;
