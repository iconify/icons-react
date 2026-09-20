import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/x/x-5kkscxs.css';
import '../../css/i/i4mdtsbqk.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGw6EvLbLM"><g class="ukm9jj2re"><circle class="x-5kkscxs"/><path class="i4mdtsbqk"/></g></mask></defs><path mask="url(#SVGw6EvLbLM)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:close-square-duotone-line",
	});
}

export default Component;
