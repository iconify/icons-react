import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-fwvxbba.css';
import '../../css/j/jkgvhzbvu.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGabB7geOy"><g class="ft5dv1b6b"><circle class="q-fwvxbba"/><path class="jkgvhzbvu"/></g></mask></defs><path mask="url(#SVGabB7geOy)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:clock-duotone-line",
	});
}

export default Component;
