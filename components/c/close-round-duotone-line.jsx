import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/x/x-5kkscxs.css';
import '../../css/k/k760izbld.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGi3NDrbmQ"><g class="ukm9jj2re"><circle class="x-5kkscxs"/><path class="k760izbld"/></g></mask></defs><path mask="url(#SVGi3NDrbmQ)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:close-round-duotone-line",
	});
}

export default Component;
