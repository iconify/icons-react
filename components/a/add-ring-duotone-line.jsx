import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/x/x-5kkscxs.css';
import '../../css/u/u165akbuh.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGRI9iJRi"><g class="ukm9jj2re"><circle class="x-5kkscxs"/><path class="u165akbuh"/></g></mask></defs><path mask="url(#SVGGRI9iJRi)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:add-ring-duotone-line",
	});
}

export default Component;
