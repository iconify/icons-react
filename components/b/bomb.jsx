import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n9vdvil7y.css';
import '../../css/u/ui2aj2byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="n9vdvil7y"/><path class="ui2aj2byh"/></g>`,
		"fallback": "lucide:bomb",
	});
}

export default Component;
