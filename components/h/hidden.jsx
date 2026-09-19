import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znvs6w-8g.css';
import '../../css/d/d2zz1uo2x.css';
import '../../css/l/l5j5uofki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znvs6w-8g"/><path class="d2zz1uo2x"/><path class="l5j5uofki"/>`,
		"fallback": "formkit:hidden",
	});
}

export default Component;
