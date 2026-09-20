import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xid9gtrns.css';
import '../../css/c/cax_t5mes.css';
import '../../css/i/ihd0-dkdb.css';
import '../../css/w/wphjg4btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xid9gtrns"/><path class="cax_t5mes"/><path class="ihd0-dkdb"/><path class="wphjg4btj"/></g>`,
		"fallback": "solar:globe-line-duotone",
	});
}

export default Component;
