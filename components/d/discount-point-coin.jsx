import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gats52bea.css';
import '../../css/f/fkfx22b0z.css';
import '../../css/u/ui-jy_46p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gats52bea"/><path class="fkfx22b0z"/><path class="ui-jy_46p"/>`,
		"fallback": "streamline-freehand:discount-point-coin",
	});
}

export default Component;
