import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/j/jmkfw4bqa.css';
import '../../css/u/ue5m-lb6r.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGydMATduU"><g class="ukm9jj2re"><path class="jmkfw4bqa"/><path class="ue5m-lb6r"/></g></mask></defs><path mask="url(#SVGydMATduU)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:close-ring-duotone-line",
	});
}

export default Component;
