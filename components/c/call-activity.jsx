import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnd4yka7p.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="translate(0 947.638)" class="lnd4yka7p"/>`,
		"fallback": "bpmn:call-activity",
	});
}

export default Component;
